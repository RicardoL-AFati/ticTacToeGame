define(function () {
return class ComputerPlayer {

constructor(letter, gridDiv, gridCells) {
    this.gridDiv = gridDiv;
    this.gridCells = gridCells;
    this.letter = letter;
    this.gridAreas = {
        edges : [1,3,5,7],
        corners : [0,2,6,8],
    }
}

isBoardEmpty () {
    this.gridCells.forEach(function(cell){
        if (cell.innerHTML !== "") return false;
        return true;
    });
};

getRandomNum (limit) {
    return Math.floor(Math.random() * limit);
};

makeMove () {
    // if (this.isBoardEmpty()) {
        let random = this.getRandomNum(2);

        if (random < 1) {
            this.gridCells[0].innerHTML = this.letter;   
        } else {
            this.gridCells[0].innerHTML = "O"; 
            // let div = this.getRandomNum(4);
            // div = this.gridAreas.corners[div];
            // this.gridCells[div].text(this.letter);
        }
    // }
};

}
});