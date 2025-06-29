// get user input
const inputUI = document.querySelector("#grid-select");
const confirmBtn = document.querySelector("#confirm-btn");
const clearButton = document.querySelector("#clear");
const modeSwitchUI = Array.from(document.querySelectorAll("#switch button"));

// artboard
const artBoardUI = document.querySelector("#artboard");
const artboardSize = artBoardUI.getBoundingClientRect().width; // this is static

// user defined value
// userValue = inputUI.value;

// event listners

// When app loads
document.addEventListener("DOMContentLoaded", () => {
    gridCreator(32);
    inputUI.value = '32';
});

// Clicking Confirm Button
confirmBtn.addEventListener("click", () => {
    handleGridInput();
});

// Keboard "Enter" key
inputUI.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleGridInput() 
})

// Clear Artboard button
clearButton.addEventListener("click", () => {
    clearGrid();
    inputUI.value = '';
});

// Switch Modes // i was not  able to figue this out as modeSwitchUI is an array
modeSwitchUI.forEach((btn) => {
    switchModes(btn)
});

function switchModes(target) {
    target.addEventListener("click", () =>{
        target.setAttribute("style", "background-color: white");
    });
    target.addEventListener("mouseover", () => {
        target.setAttribute("style", "background-color: hsla(0, 0%, 97%, 1)");
    });
    target.addEventListener("mouseleave", () => {
        target.setAttribute("style", "background-color: transparent");
    });
}


// creates grid
function handleGridInput() {
    let userInput = parseInt(inputUI.value);
    // if value is < 1 or 100
    userInput < 2 || userInput > 100 || isNaN(userInput) ? alert('Invalid Grid Size') : gridCreator(userInput);
}
// const cellUI = document.createElement("div");

function gridCreator(value) {
    clearGrid();
    value = parseInt(value);
    let cellSize = artboardSize / value;
    let cellTotal = value ** 2;
    // run a for loop to create necessary divs(cellUI)
    for (let i = 0; i < cellTotal; i++) {
        const cellUI = document.createElement("div");
        // document.createElement(cellUI)
        cellUI.setAttribute("class", "cell");
        cellUI.style.width = `${cellSize}px`;
        cellUI.style.height = `${cellSize}px`;
        artBoardUI.appendChild(cellUI);
        hoverListener(cellUI);
    };
};

// clears grid
function clearGrid() {
    while (artBoardUI.firstChild) {
        artBoardUI.removeChild(artBoardUI.firstChild) ///did not understood this piece of code
    };
    
    // gridCreator(userValue)
}

// paint modes //

// random color //
function random(num) {
    return Math.floor(Math.random() * (num + 1));
}

function randomColor(element) {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    element.style.backgroundColor = rndCol;
}

// user defined //
function userDefColor(element) {
    // value = 
}

// eraser //

// hover listner
function hoverListener (element) {
    element.addEventListener("mouseover", () =>{
        randomColor(element)
    });
}