//randomização e acesso
function rnd(array){

  return array[Math.floor(Math.random()*array.length)];

}

window.addEventListener("load", randomArt, false);
function randomArt(){
  let homeHeader = document.getElementById('homeHeader'),
   innerHTML,
  artes = [
    'https://magedbgt.github.io/exorcisamus/img/Assinatura.png',
    'https://magedbgt.github.io/exorcisamus/img/PRA-MAGE.png',
    'https://magedbgt.github.io/exorcisamus/img/ab1.jpg',
    'https://magedbgt.github.io/exorcisamus/img/mage.jpg',
    'https://magedbgt.github.io/exorcisamus/img/photo.png',
    'https://magedbgt.github.io/exorcisamus/img/roses_by_mage.png',
    'https://magedbgt.github.io/exorcisamus/img/roses_by_Hanano.jpg',
    'https://magedbgt.github.io/exorcisamus/img/chocotan_by_Hana.jpg',
  ],
  //randomização
  arte = rnd(artes);

  //innerHTML
  innerHTML =
  'div.abimg{background-image: -o-linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('+arte+')!important;background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.3))), url('+arte+')!important;background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('+arte+')!important;}';

if (homeHeader != null) {
  homeHeader.innerHTML = innerHTML;
};

}
