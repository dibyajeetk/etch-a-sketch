let gridCount = 10;
const artBoardUI = document.querySelector("#artboard");


for (let i = 0; i <= gridCount; i++) {
    
    const cellUI = document.createElement("div")
    cellUI.setAttribute("class", "cell");
    artBoardUI.appendChild(cellUI);

    // console.log(cellUI)
}