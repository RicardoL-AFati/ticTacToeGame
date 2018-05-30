define (function (require){
    let choices = [],
        currentPlayer,
        currentLetter,
        checkForWinner = true;

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
            currentPlayer = Math.floor(Math.random() * 2);
            currentPlayer = (currentPlayer < 1) ? "Computer" : "You";
        } else {currentPlayer = "One";}
        
        $("#currentPlayer").text(currentPlayer);
        $("#prompt").fadeIn('100');
        $("#gameBoard").css("display", "grid");  
    }
    
    $("div > div").one("click", function(){
        changeBoard($(this));
    });

    function changeBoard(gridCell){
        if ($("#currentPlayer").text() == "One") {
            currentLetter = choices[1];
            currentPlayer = "Two";
        } else {
            currentLetter = (choices[1] == "X") ? "0" : "X";
            currentPlayer = "One";
        }
        gridCell.text(currentLetter);
        $("#currentPlayer").text(currentPlayer);
    }
});