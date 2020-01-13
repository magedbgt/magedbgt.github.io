// top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let screenWidth = parseFloat(window.screen.width),
  screenHeight = parseFloat(window.screen.height),
  topoBtn = document.getElementById("topoBtn");

  if (document.body.scrollTop > screenHeight * 1.5 || document.documentElement.scrollTop > screenHeight * 1.5) {
    topoBtn.style.display = "block";
  } else {
    topoBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//wow js
      let wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: false,     // reset animation on end (default is true)
  }
);
wow.init();

//cookie consent => será retirado
window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#ef4f5c",
      "text": "#ffffff"
    },
    "button": {
      "background": "transparent",
      "text": "#ffffff",
      "border": "#ffffff"
    }
  },
  "position": "bottom-right",
  "content": {
    "message": "This site uses cookies from Google to deliver its services and to analyze traffic. Your IP address and user-agent are shared with Google along with performance and security metrics to ensure quality of service, generate usage statistics, and to detect and address abuse.",
    "dismiss": "Ok",
    "href": "https://policies.google.com/technologies/cookies"
  }
})});

//Sidenav
let menu = document.getElementById("mySidenav"),
menuHamb = document.getElementById('menuIcon');

function openNav() {
  menuHamb.classList.toggle('white-menu');
  menuHamb.classList.toggle('fa-bars');
  menuHamb.classList.toggle('fa-times');
  menu.classList.toggle('open-nav');
}
