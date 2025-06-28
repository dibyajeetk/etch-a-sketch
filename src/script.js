let gridCount = 20;
const artBoardUI = document.querySelector("#artboard");

// store gridCount
// get length of any side of the #artboard. 
const artboardSize = artBoardUI.getBoundingClientRect().width; // this is static
// #cell size = #artboard side(600px) / #gridCount(10). === 600 / 10 => 60px
let cellSize = artboardSize / gridCount;
// total number of box = grid count ** 2;
let cellTotal = gridCount ** 2;
// run a for loop to create necessary divs(cellUI)


for (let i = 0; i < cellTotal; i++) {
    
    const cellUI = document.createElement("div")
    cellUI.setAttribute("class", "cell");
    cellUI.style.width = `${cellSize}px`;
    cellUI.style.height = `${cellSize}px`;
    artBoardUI.appendChild(cellUI);

    console.log(cellUI)
}