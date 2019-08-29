let menu = document.getElementById("mySidenav"),
menuHamb = document.getElementById('menuIcon');

function openNav() {
  menuHamb.classList.toggle('white-menu');
  menuHamb.classList.toggle('fa-bars');
  menuHamb.classList.toggle('fa-times');
  menu.classList.toggle('open-nav');
}
