define (function (require){
    let CompPlayer = require("./compPlayer");

    let choices = [],
        currentPlayer,
        playerLetter,
        compLetter,
        compPlayer,
        gridDiv,
        gridCells,
        checkForWinner = false;

    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2],
    ]

    $("div > button").on("click", function(){
        choices.push($(this).text());
        $(this).parent().fadeOut(500, function(){
            if (choices.length == 1) {
                let question = (choices[0] == "One") ? "Player: " : "Player One: ";
                $("#playerQ").text(question);
                $(".form.letter").fadeIn('100');
            } else {
                setTimeout(renderBoard(), 1000); 
            }
        });
    });
    
    function renderBoard(){
        if (choices[0] === "One"){
            // Determining if Computer or player goes first
                //Generating random num (0 or 1)
            currentPlayer = Math.floor(Math.random() * 2);
                //If num is 0 -> computer, else player
            currentPlayer = (currentPlayer < 1) ? "Computer" : "You";
        } else {currentPlayer = "One";}
        
        $("#currentPlayer").text(currentPlayer);
        $("#prompt").fadeIn('100');
        $("#gameBoard").css("display", "grid");
        
        startGame();
    }
    
    function isGameOver(gridCellsArray, playerLetter){
        let cellsPicked = [],
            gameWon = false;

        for (let cellNum in gridCellsArray) {
            if (gridCellsArray[cellNum].innerHTML == playerLetter) {
                cellsPicked.push[cellNum];
            }
        }

        for (let combo of winCombos) {
            if (combo.every(function(gridCell){
                return cellsPicked.indexOf(gridCell) > -1;
            })) {
                gameWon = {combo : combo, playerLetter: playerLetter};
                break;  
            }
        }

        return gameWon;
    }

    function startGame() {
        gridDiv = document.querySelector("#gameBoard");
        gridCells = Array.from(gridDiv.querySelectorAll("*"));

        checkforWinner = isGameOver(gridCells, "X");
        checkforWinner = isGameOver(gridCells, "O");

        while (!checkForWinner) {
          
        }
        isBoardEmpty(gridCells);
        // if (choices[0] === "One") {
        //     compLetter = (choices[1] == "X") ? "0" : "X";
        //     compPlayer = new CompPlayer(compLetter, gridDiv, gridCells);
        // }
       
    }
    // $("div > div").one("click", function(){
    //     if (choices[0] == "One"){
    //         changeBoard($(this));
    //     } else {
    //         changeBoardTwo($(this));
    //     }
    // });

    // // function changeBoard(gridCell) {
    // //     if ($("#currentPlayer").text() == "Computer") {
    // //         console.log(compPlayer);
    // //         compPlayer.makeMove();
    // //         currentPlayer = "You";
    // //     } else {
    // //         playerLetter = choices[1];
    // //         currentPlayer = "Computer";
    // //     }
    // //     gridCell.text(playerLetter);
    // //     $("#currentPlayer").text(currentPlayer);
    // }
    function changeBoardTwo(gridCell){
        if ($("#currentPlayer").text() == "One") {
            playerLetter = choices[1];
            currentPlayer = "Two";
        } else {
            playerLetter = (choices[1] == "X") ? "0" : "X";
            currentPlayer = "One";
        }
        gridCell.text(playerLetter);
        $("#currentPlayer").text(currentPlayer);
    }
});