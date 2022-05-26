/**
Script to pop up dialog box when button clicked
**/
( function( $ ) {
	var modal, btn, span;

  // Get the modal
  cmodal = document.getElementById("createModal");
  jmodal = document.getElementById("joinModal");
  // Get the button that opens the modal
  cbtn = document.getElementById("create");
  jbtn = document.getElementById("join");
  // Get the <span> element that closes the modal
  cspan = document.getElementsByClassName("cclose")[0];
  jspan = document.getElementsByClassName("jclose")[0];
  // When the user clicks the button, open the modal
  cbtn.onclick = function() {
    cmodal.style.display = "block";
  }
  jbtn.onclick = function() {
    jmodal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  cspan.onclick = function() {
    cmodal.style.display = "none";
  }
  jspan.onclick = function() {
    jmodal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == cmodal) {
      cmodal.style.display = "none";
    }
    if (event.target == jmodal) {
      jmodal.style.display = "none";
    }
  }
  
} )( jQuery );
