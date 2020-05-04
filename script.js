window.onscroll = function() {scrollFunction()};
var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 100;
var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100;
var vmin = Math.min(vw, vh);

function scrollFunction() {
  var startThreshold = 12;
  var endThreshold = 35;
  console.log(document.body.scrollTop / vh);
  if (Math.max(document.body.scrollTop, document.documentElement.scrollTop) > endThreshold * vh) {
    document.getElementById("header").style.fontSize = "" + endThreshold * vh / 2;
  } else if (Math.max(document.body.scrollTop, document.documentElement.scrollTop) < endThreshold * vh && Math.max(document.body.scrollTop, document.documentElement.scrollTop) > startThreshold * vh){
    document.getElementById("header").style.fontSize = "" + (Math.max(document.body.scrollTop, document.documentElement.scrollTop) / 2);
    console.log("balls");
  } else if (Math.max(document.body.scrollTop, document.documentElement.scrollTop) > startThreshold * vh) {
    document.getElementById("header").style.fontSize = "" + startThreshold * vh / 2;
  }
}