window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let screenWidth = parseFloat(window.screen.width),
  screenHeight = parseFloat(window.screen.height);

  // if (document.body.scrollTop > screenHeight * 1.5 && screenWidth > 1023 || document.documentElement.scrollTop > screenHeight * 1.5 && screenWidth > 1023) {
  //   document.getElementById("topoBtn").style.display = "block";
  // } else {
  //   document.getElementById("topoBtn").style.display = "none";
  // }
  if (document.body.scrollTop > screenHeight * 1.5 || document.documentElement.scrollTop > screenHeight * 1.5) {
    document.getElementById("topoBtn").style.display = "block";
  } else {
    document.getElementById("topoBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
