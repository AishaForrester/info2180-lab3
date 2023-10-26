document.addEventListener("DOMContentLoaded", function() {  //javascript works when page is opened
  let keepTrack = ["", "", "", "", "", "", "", "", ""]
  const OT = "O"
  const XT = "X"
  playingNow = XT
  var stat = document.querySelector("#status");
  


  var squares = document.querySelectorAll("#board div") //observing all div in board
  squares.forEach(function(square, index) {
    square.classList.add("square")
    
    square.addEventListener("click", function(){  //works when block is clicked
      if(keepTrack[index] == "") {
        square.innerHTML = playingNow;

        keepTrack[index] = playingNow  //updating to current play
        square.classList.add(playingNow)  //ensuring that we are adding X or O to square
        console.log("played")  //for testing purposes only
        


        playingNow = playingNow == XT ? OT : XT //if X has been played, we navigate to O 

      const checkWinner = findSameElement(keepTrack)
      const checkArrayE = isAnyElementEmpty(keepTrack)
      if(checkWinner && checkArrayE === false) {
        stat.textContent = `Congratulations! ${checkWinner} is the Winner`;
        stat.classList.add("you-won")
        console.log("We saw a winner")  //testing
      
      }  
      
      } 
       
      
    });  //end of listener (for when button is clicked)

    square.addEventListener("mouseover", function(){ //colour will change when you hover the square
      square.classList.add("hover")
    });
    square.addEventListener("mouseout", function(){  //colour will go back to normal afterwards
      square.classList.remove("hover")
    });

    
    
  }); //end of forEach for going through boxes

  function isAnyElementEmpty(someArray) {  //check if our keepTrack is empty or not
    return someArray.some(element => element === "");
  }
  
  function findSameElement(arr) {
    const firstElement = arr[0]; //first element in first row
    const secElement = arr[3]    //first element in second row
    const thirdElement = arr[6]  //first element in third row
    
    const winRow1 = arr.slice(0, 3); //split keepTrack by 3x3
    const winRow2 = arr.slice(3, 6);
    const winRow3 = arr.slice(6, 9);
  
    function checkRow(row) {  
      for (let i = 1; i < row.length; i++) {
        if (row[i] !== firstElement && row[i] !== secElement && row[i] !== thirdElement && row[i] === "") {
          return null;
        }
      }
      return row[0] === firstElement || row[0] === secElement || row[0] === thirdElement || row[0] === "" ? row[0] : null;
    }
    //this function will look at the elements of each row and compare it to the first element of the 
    //first row, frst element of second row etc and if it finds a match it shall return that element
    //so we can know if X or O won the game 
  
    if (winRow1.every(element => element === firstElement) && firstElement !== "") {
      return checkRow(winRow1);
    } else if (winRow2.every(element => element === secElement) && secElement !== "") {
      return checkRow(winRow2);
    } else if (winRow3.every(element => element === thirdElement) && thirdElement !== "") {
      return checkRow(winRow3);
    }
    
    return null; // If none of the rows contain the same element, return null.
  }
  
  
});
 








  
