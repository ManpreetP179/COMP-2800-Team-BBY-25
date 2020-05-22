
function myMove() {
  var elem = document.getElementById("scissors");   
  var pos = 0;
  var id = setInterval(frame, 20);
  function frame() {
    if (pos >= (window.innerWidth - 30)) {
      clearInterval(id);

      document.getElementById("easterImg").style.transitionTimingFunction = "linear";
      document.getElementById("easterImg").style.display = "block";
      document.getElementById("easterImg").style.width = "100%";

      document.getElementById("scissors").style.display = "none";
    } else {
      pos = pos + 5; 
      elem.style.left = pos + 'px'; 
    }
  }
 
}


