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
// TextScramble by Justin Windle https://codepen.io/soulwire/pen/mErPAK (edited to facilitate my life)
// ———————————————————————————————————————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
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
