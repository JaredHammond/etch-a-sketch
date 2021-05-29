function makeGrid(size) {
    // Makes grid of boxes with 'size' number of boxes on each edge
    for (let i = 0; i < (size * size); i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "box");
        newDiv.setAttribute("id", "div" + i);
        container.appendChild(newDiv);
    }
    container.style.gridTemplateColumns = "repeat(" + size + ", 1fr";
    createListeners();
}

function createListeners() {
    // Creates listener for each box to monitor mouseover events
    const grid = document.querySelectorAll('.box');
    grid.forEach(box => box.addEventListener('mouseover', changeColor));
}

function randomColor() {
    // Creates random rgb color value
    function number() {
        return Math.floor(Math.random() * 256);
    }
    const newColor = "rgb(" + number() + "," + number() + "," + number() + ")";
    return newColor
}

function changeColor() {
    this.style.backgroundColor = randomColor();
}

function resetGrid() {
    // Allows the user to change the number of boxes in the grid
    let size = Math.floor(parseInt(prompt("How many blocks per side would you like? Enter 1-64:")));
    console.log(size);
    let keepGoing = true;
    while (keepGoing) {
        if (size < 1 || size > 64) {
            size = Math.floor(parseInt(prompt("Try again. Enter a number between 1 and 64")));
        } else {
            keepGoing = !keepGoing;
        }
    }
    removeChildren(container);
    makeGrid(size);
}

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Setting inits
let sideSize = 16;
const container = document.querySelector('.container');
makeGrid(sideSize); // Makes initial 16x16 grid
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGrid);