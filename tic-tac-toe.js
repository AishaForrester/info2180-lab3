document.addEventListener("DOMContentLoaded", function() {
  var squares = document.querySelectorAll("#board div")
  squares.forEach(function(square) {
    square.classList.add("square")
  });
  console.log(squares)  //testing
  let boxes = Array.from(document.getElementsByClassName("square"))
  console.log(boxes)  //testing

});
 








  
