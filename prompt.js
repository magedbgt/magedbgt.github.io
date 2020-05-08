const sections = [
  ['criar', 'desenhar', 'observar', 'desenvolver', 'estudar']
];

//elementos a mudar
const atividade = document.getElementById('atividade');
const atividade_ = new TextScramble(atividade);
const elEvent = [atividade_];

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
    // for (let t = 0; t < showcase.length; t++) {
    //   showcase[t].addEventListener('mouseover',function() {changeSrc(this);}, false );
    //   showcase[t].addEventListener('touchstart',function() {changeSrc(this);}, false );
    //   showcase[t].name = t;
    // }
  }, false);
  ele.addEventListener('transitionend', function(){
    // command.addEventListener("keyup", function(event) {
    //   if (event.keyCode === 13) {
    //    event.preventDefault();
    //    revealAtCommand();
    //   }
    // });
  }, false);

}

let runCode = document.getElementById("runCode");
window.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   runCode.click();
  }
});