document.addEventListener("DOMContentLoaded", function() {  //works when page is opened
  let keepTrack = ["", "", "", "", "", "", "", "", ""]
  const OT = "O"
  const XT = "X"
  playingNow = XT

  var squares = document.querySelectorAll("#board div") //observing all div in board
  squares.forEach(function(square, index) {
    square.classList.add("square")

    square.addEventListener("click", function(){  //works when space is clicked
      if(keepTrack[index] == "") {
        square.innerHTML = playingNow;

        keepTrack[index] = playingNow  //updating to current play
        square.classList.add(playingNow)  //ensuring that we are adding X or O to square

        playingNow = playingNow == XT ? OT : XT //if X has been played, we navigate to O 
      }
      
    });  //end of listener (for when button is clicked)
    
  }); //end of forEach for going through tiles
  console.log(keepTrack)

  
});
 








  
