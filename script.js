window.onscroll = function () { scrollFunction() };
var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 100;
var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100;
var vmin = Math.min(vw, vh);

scrollFunction()

function scrollFunction() {
  var baseStart = 12;
  var baseEnd = 35;
  var h1 = 0;
  var h2 = 165;
  var grow = document.documentElement.clientWidth > 1200;
  var scrollValue = window.pageYOffset;
  console.log(scrollValue + ", " + vh + " = " + (scrollValue / vh));
  // Header1 grow on scroll
  if (grow) {
    if (scrollValue > (baseEnd + h1) * vh) {
      document.getElementById("header").style.fontSize = baseEnd * vh / 2;
    } else if (scrollValue < (baseEnd + h1) * vh && scrollValue > (baseStart + h1) * vh) {
      document.getElementById("header").style.fontSize = ((scrollValue - (h1 * vh)) / 2);
    } else if (scrollValue < (baseStart + h1) * vh) {
      document.getElementById("header").style.fontSize = baseStart * vh / 2;
    }
  } else {
    document.getElementById("header").style.fontSize = 12 * vw;
  }
  

  // Hide Banner on scroll
  if (scrollValue > 110 * vh) {
    document.getElementById("banner").style.display = 'none';
  } else {
    document.getElementById("banner").style.display = 'block';
  }


  // Header2 grow on scroll
  if (grow) {
    if (scrollValue > (baseEnd + h2) * vh) {
      document.getElementById("header2").style.fontSize = baseEnd * vh / 2;
    } else if (scrollValue < (baseEnd + h2) * vh && scrollValue > (baseStart + h2) * vh) {
      document.getElementById("header2").style.fontSize = ((scrollValue - (h2 * vh)) / 2);
    } else if (scrollValue < (baseStart + h2) * vh) {
      document.getElementById("header2").style.fontSize = baseStart * vh / 2;
    }
  } else {
    document.getElementById("header2").style.fontSize = 12 * vw;
  }
}