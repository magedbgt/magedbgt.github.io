var screenWidth = window.screen.width;

if(screenWidth >= 1020){
  function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      duration: '300%',
      triggerElement: '.about-title',
      triggerHook: 0
    })
    .setPin('.about-title')
    //.addIndicators()
    .addTo(controller)
  }

  splitScroll();
}
