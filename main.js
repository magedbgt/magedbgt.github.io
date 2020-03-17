let change = document.getElementById('change'),
name = 'Maria Eugênia',
speed = 200,
i, t = 0;



function typeWriter() {
  let txt = name;
  if (t < txt.length) {
    change.innerHTML += txt.charAt(t);
    t++;
    setTimeout(typeWriter, speed);
  }
}


// ———————————————————————————————————————————————————————————————————————————————————
// TextScramble by Justin Windle https://codepen.io/soulwire/pen/mErPAK (edited)
// ———————————————————————————————————————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

let counter = 0
const next = (arr,elem) => {
  elem.setText(arr[counter]).then(() => {
    setTimeout(function(){next(arr,elem);}, 2000)
  })
  counter = (counter + 1) % arr.length;
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

//elementos a mudar
const atividade = document.getElementById('atividade'),
work = document.getElementById('work'),
about = document.getElementById('about'),
contact = document.getElementById('contact');

const atividade_ = new TextScramble(atividade),
work_ = new TextScramble(work),
about_ = new TextScramble(about),
contact_ = new TextScramble(contact),
elEvent = [atividade_, work_, about_, contact_];

const sections = [
  ['criar', 'desenhar', 'observar', 'desenvolver', 'estudar'],
  ['#Projetos', '#Projetos', '#Projetos', '#Projetos', '#Projetos'],
  ['#Sobre', '#Sobre', '#Sobre', '#Sobre', '#Sobre'],
  ['#Contato', '#Contato', '#Contato', '#Contato', '#Contato']
];




//PROMPT code

function ranCode(el){
  let beforeRun = document.getElementsByClassName('beforeRun'), a = 0,
  ell = el.parentNode.parentNode, ele = el.nextElementSibling;
  el.classList.add('ranCode');
  ele.classList.add('ranCode');
  function loaded(el){
    el.classList.add('clipPath');
    function clip(el){
      for (let i = 0; i < beforeRun.length; i++) {
        beforeRun[i].classList.remove('beforeRun');
      }
      el.addEventListener('transitionend', function(){el.remove();},false);
    }
    el.addEventListener('transitionend',function (){clip(ell)},false);
  }
  ele.addEventListener('transitionend',function (){loaded(ell)},false);
  for (let t = 0; t < sections.length; t++) {
    ele.addEventListener('transitionend', function(){
      setTimeout(function(){
        next(sections[t], elEvent[t]);
      }, 5000)
    }, false);
  }
  ele.addEventListener('transitionend', function(){setTimeout(typeWriter, 2000);}, false);

}
let input = document.getElementById("runCode");
window.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   input.click();
  }
});
