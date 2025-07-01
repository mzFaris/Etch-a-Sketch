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
createGrid(16);

function createGrid(numberOfGrid) {
    for (let i = 0; i < numberOfGrid; i++) {
        const gridContainer = document.createElement("div");
        gridContainer.style.display = "flex";
        container.appendChild(gridContainer);
        for (let j = 0; j < numberOfGrid; j++) {
            const grid = document.createElement("div");
            grid.style.width = "60px";
            grid.style.height = "60px";
            grid.style.border = "1px solid black";
            gridContainer.appendChild(grid);
        }
    }
}
