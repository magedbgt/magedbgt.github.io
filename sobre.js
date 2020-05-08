const sections = [
    ['#Sobre'],
  ];
//elementos a mudar
const about = document.getElementById('about');

const about_ = new TextScramble(about);

const elEvent = [about_];

setTimeout(function(){
  next(sections[0], elEvent[0]);
}, 1000)

function showIdade(){
  let birth = 1994,
  now = new Date(),
  idade = now.getFullYear() - birth;

  if(now.getDate != 12 && now.getMonth != 7){
    idade--
  }

  for(let i=0; i<=idade; i++){
    let spanIdade = document.getElementById('idade');
    spanIdade.innerHTML = i;
    // console.log(i);
  }
}


function countValue(id, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let obj = document.getElementById(id);
  let timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}

window.addEventListener('load', function(){
  setTimeout(function(){
    let birth = 1994,
    now = new Date(),
    idade = now.getFullYear() - birth;
    if(now.getDate != 12 && now.getMonth != 7) idade--;
    countValue("idade", 0, idade, 1000);
  }, 1000);
}, false);