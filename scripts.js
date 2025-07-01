/**
 * change the flex direction to column
 * query select container object from html page
 * for numberOfGrid
 *      make div to become container of div each row/col
 *      append to container
 *      for numberOfGrid
 *          make child div
 *          add border to div and also color
 *          append child div to row container div
 */

const container = document.querySelector(".container");
createGrids(16);

function createGrids(numberOfGrid) {
    for (let i = 0; i < numberOfGrid; i++) {
        const gridContainer = document.createElement("div");
        gridContainer.style.display = "flex";
        container.appendChild(gridContainer);
        for (let j = 0; j < numberOfGrid; j++) {
            const grid = document.createElement("div");
            createGrid(grid);
            gridContainer.appendChild(grid);
        }
    }
}

function createGrid(grid) {
    grid.style.minWidth = "60px";
    grid.style.minHeight = "60px";
    grid.style.border = "1px solid black";
    grid.style.flexShrink = "1";
    grid.addEventListener("mouseover", () => {
        grid.classList.add("paint")
    })
}