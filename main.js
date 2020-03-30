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
    //this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.chars = '01'
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

//showcase
let showcase = document.getElementsByClassName('showcase'),
showcaseHash = document.getElementById('showcaseHash'),
showcaseImg = document.getElementById('showcaseImg'),
showcaseSrc = ["img/ba.png",
                "img/exorcisamus.png",
                "img/gefro.png",
                "img/mvt.png"
              ],
showcaseHashtags = ["#2019 #blogger #HTML5 #CSS3 #JS #GitHub",
                    "#2019 #blogger #HTML5 #CSS3 #JS #GitHub",
                    "#2019 #GitHub #HTML5 #CSS3 #JS",
                    "#2019 #GitHub #HTML5 #CSS3 #JS #PWA"
                  ];
function changeSrc(el) {
  let counter = el.name;
  showcaseHash.innerHTML = showcaseHashtags[counter];
  showcaseImg.src = showcaseSrc[counter];
  for (let t = 0; t < showcase.length; t++) {
    showcase[t].firstElementChild.classList.remove('active');
  }
  el.firstElementChild.classList.add('active');
}


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
  ele.addEventListener('transitionend', function(){
    for (let t = 0; t < showcase.length; t++) {
      showcase[t].addEventListener('mouseover',function() {changeSrc(this);}, false );
      showcase[t].addEventListener('touchstart',function() {changeSrc(this);}, false );
      showcase[t].name = t;
    }
  }, false);
  ele.addEventListener('transitionend', function(){
    command.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       revealAtCommand();
      }
    });
  }, false);

}

let runCode = document.getElementById("runCode");
window.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   runCode.click();
  }
});


//vendor js
// Look for .hamburger
 let hamburger = document.querySelector(".hamburger"),
 navBar = document.getElementById('navBar'),
 nav = document.getElementById('nav'),
 widthScreen = window.screen.width,
 widthX, calc, left, right;



 // On click
 hamburger.addEventListener("click", function() {
   // Toggle class "is-active"
   hamburger.classList.toggle("is-active");
   // Do something else, like open/close menu
   if (widthScreen <= 1024) {
     widthX = '80vw';
     left = '0';
     right = 'auto';
   }else {
     widthX = '20vw';
     calc = 'calc(100vw - '+widthX+')';
     left = 'auto';
     right = '0';
   }
  if (nav.style.width == widthX) {
    navBar.style.width = '100vw';
    nav.style.width = '0';
    nav.style.left = left;
    nav.style.right = right;
  }else {
    navBar.style.width = calc;
    nav.style.width = widthX;
    nav.style.left = left;
    nav.style.right = right;
  }

 });


//vendor - rellax js

if (widthScreen > 1024) {
  let rellax = new Rellax('.rellax');
}
//Sobre
let personal = [
                  'Nome: Maria Eugênia Deungaro Borgato',
                  'Data de Nascimento: 12/08/1994',
                  'Hobbies: Desenhar, Jogar, Estudar e Desenvolver'
                ];

let educacao = [
                  'Faculdade de Tecnologia de Jahu - FATEC JAHU • Sistemas para Internet • Tecnologia • 2020-Presente',
                  'Universidade de São Paulo - ESALQ/USP • Engenharia Agronômica • Bacharelado • 2012-2019',
                  'Ohio State University - OSU Columbus • Estudos agrários • Graduação Sanduíche • 2015-2016',
                  'Idiomas: Inglês Fluente • Espanhol Intermediário'
                ];
let conhecimentos = [ 'HTML5',  'CSS3',  'JS',  'Git/GitHub', 'PWA' ];

class Mage{
  static reveal(about){
    return about.join('<br><br>');
  }
}


function revealAtCommand() {
  let command = document.getElementById('command'),
  output = document.getElementById('output'),
  value = command.value;

  if (value == 'dadosPessoais') {
    output.innerHTML = Mage.reveal(personal);
  }else if (value == 'educacao') {
    output.innerHTML = Mage.reveal(educacao);
  }else if (value == 'conhecimentos') {
    output.innerHTML = Mage.reveal(conhecimentos);
  }else if (value == '') {
    output.innerHTML = "<span class='papaya'>"+'Uncaught TypeError: Cannot read property \'join\' of undefined at '+'Function.reveal</span>';
  }else {
    if (value.includes(' ')) {
      output.innerHTML = "<span class='papaya'>Uncaught SyntaxError: missing ) after argument list</span>";
    }else {
      output.innerHTML = "<span class='papaya'>Uncaught ReferenceError: "+value+" is not defined</span>";
    }
  }

}
