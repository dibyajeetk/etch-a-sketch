// get user input
const inputUI = document.querySelector("#grid-select");
const confirmBtn = document.querySelector("#confirm-btn");

// artboard
const artBoardUI = document.querySelector("#artboard");
const artboardSize = artBoardUI.getBoundingClientRect().width; // this is static

// clear artboard btn
const ctaButton = document.querySelector("#cta");

confirmBtn.addEventListener("click", () => {
    let userInput = parseInt(inputUI.value);
    // if value is < 1 or 100
    userInput < 1 || userInput > 100 ? alert('fuck you') : gridCreator(userInput);
});

ctaButton.addEventListener("click", () => {
    clearGrid();
})

function gridCreator(value) {
    value = parseInt(value);
    let cellSize = artboardSize / value;
    let cellTotal = value ** 2;
    // run a for loop to create necessary divs(cellUI)
    for (let i = 0; i < cellTotal; i++) {
        const cellUI = document.createElement("div");
        cellUI.setAttribute("class", "cell");
        cellUI.style.width = `${cellSize}px`;
        cellUI.style.height = `${cellSize}px`;
        artBoardUI.appendChild(cellUI);
    };
};

function clearGrid() {
    while (artBoardUI.firstChild) {
        artBoardUI.removeChild(artBoardUI.firstChild)
    }
}