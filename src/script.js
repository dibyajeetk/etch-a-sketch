// get user input
const inputUI = document.querySelector("#grid-select");
const confirmBtn = document.querySelector("#confirm-btn");
const clearButton = document.querySelector("#clear");
const modeSwitchUI = Array.from(document.querySelectorAll("#switch span"));
const toggleUI = Array.from(document.querySelectorAll("#toggle span"));
const showGridUI = Array.from(document.querySelectorAll("#grid-lines button"));

// artboard
const artBoardUI = document.querySelector("#artboard");
const artboardSize = artBoardUI.getBoundingClientRect().width; // this is static


let isDrawing = false;
let cells = [];


// event listners

// When app loads State management
document.addEventListener("DOMContentLoaded", () => {
    gridCreator(32);
    inputUI.value = '32';
    modeSwitchUI[0].setAttribute("class", "active");
    toggleUI[1].setAttribute("class", "active");
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
    // clearGrid();
    handleGridInput();
});

// creates grid
function handleGridInput() {
    let userInput = parseInt(inputUI.value);
    userInput < 2 || userInput > 100 || isNaN(userInput) ? alert('Invalid Grid Size') : gridCreator(userInput);
};

function gridCreator(value) {
    clearGrid();
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
        draw(cellUI);
    };
    cells = Array.from(artBoardUI.querySelectorAll("div"));
    if (getToggleMode() === "yes") {
        cells.forEach(cell => cell.classList.add("cellBorder"));
    }
};

// clears grid
function clearGrid() {
    while (artBoardUI.firstChild) {
        artBoardUI.removeChild(artBoardUI.firstChild) ///did not understood this piece of code
    };
}

// paint modes //

function startPainting(element, mode) {
    if (mode === 'color') {
        element.style.backgroundColor = "#1070ca"; // <-- need users to define this in UI
    } else if (mode === 'randomise'){
        let random = (num) => Math.floor(Math.random() * (num + 1));
        const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        element.style.backgroundColor = rndCol;
    } else {
        element.style.backgroundColor = 'transparent';
    }
};

// drawing logic

function getSelectedMode() {
  const active = document.querySelector("#switch .active");
  return active ? active.textContent.trim().toLowerCase() : null;
}

modeSwitchUI.forEach((btn) => {
    btn.addEventListener("click", () => {
        modeSwitchUI.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

function draw(element) {
    artBoardUI.addEventListener("mousedown", () => {
        isDrawing = true;
    });
    artBoardUI.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    element.addEventListener("dragstart", e => e.preventDefault());
    
    artBoardUI.addEventListener("mousemove", (e) => {
        let target = e.target;
        if (isDrawing === true) {
            // randomColor(target)
            startPainting(target, getSelectedMode()) // <-- need to fetch the selected mode from switch
        };
    });
    element.addEventListener('click', (e) => {
        let target = e.target;
        startPainting(target, getSelectedMode())
    });
};


function getToggleMode() {
  const active = document.querySelector("#toggle .active");
  return active ? active.textContent.trim().toLowerCase() : null;
}

toggleUI.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        toggleUI.forEach((i) => {
            i.classList.remove("active");
        });
        btn.classList.add("active");
        const mode = getToggleMode();
            cells.forEach(cell => {
            if (mode === "yes") {
            cell.classList.add("cellBorder");
        } else {
            cell.classList.remove("cellBorder");
        }
        });
    });
});
