main()

function main() {
    let numberOfGrid = 16;
    const container = document.querySelector(".container");
    createGrids(container, numberOfGrid);
}

function createGrids(parent, n) {
    for (let i = 0; i < n; i++) {
        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.flex = "1";
        parent.appendChild(container);
        createSingleGrid(container, n);
    }
}

function createSingleGrid(parent, n) {
    for (let i = 0; i < n; i++) {
        const grid = document.createElement("div");
        grid.style.border = "1px solid #000000";
        grid.style.flex = "1";
        
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "#000000";
        })
        
        parent.appendChild(grid);
    }
}