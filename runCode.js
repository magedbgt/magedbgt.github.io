
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

}
let input = document.getElementById("runCode");
window.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   input.click();
  }
});
