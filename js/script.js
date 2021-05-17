//SCRIPTS FOR THE DUMBEST TRIS GAME EVER
var cells = document.querySelectorAll(".generic-square");

var playerOneIsOn = true;

// adds the X on click
for ( var i = 0 ; i < cells.length ; i++ ) {
    //add the event listener to each cell of the table
    cells[i].addEventListener("click" , function() {
        //considers if the player one is on and let him put a X
        if ( playerOneIsOn == true ) {
            this.innerHTML = "<h1 class='text-center gamedSign'>X</h1>";
        } else if ( playerOneIsOn == false ) {
            this.innerHTML = "<h1 class='text-center gamedSign'>O</h1>";  
        }
        //changes the turn to player two
        playerOneIsOn = !playerOneIsOn;              
    });       
}


function randomNumber () {
    Math.floor(Math.random() * 9);
}





// toggles correctly the background color on click
// for ( var i = 0 ; i < cells.length ; i++ ) {
//     cells[i].addEventListener("click" , function() {
//         this.classList.toggle("orange");        
//     });
// }