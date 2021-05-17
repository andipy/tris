var cells = document.querySelectorAll(".generic-square");
var currentPlayer = "X";


for ( var i = 0 ; i < cells.length ; i++ ) {
    //listens to click event
    cells[i].addEventListener("click" , function() {
        //reads cells' content
        var cellContent = this.textContent;
        //wonders if cell content is empty
        if ( cellContent == "" ) {
            //writes in the clicked cell the symbol of the current player (X or O)
            this.innerHTML = currentPlayer;
            //changes current player
            if ( currentPlayer == "X" ) {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        }
    });
    //check if there's a winner
    
    

}