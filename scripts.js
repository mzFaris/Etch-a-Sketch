main()

function main() {
    const container = document.querySelector(".container");
    const inputButton = document.querySelector("#input-button");
    inputButton.addEventListener("click", () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        let numberOfGrid = 0;
        do {
            numberOfGrid = Number(window.prompt("Enter the number of grids", 16));
        } while (numberOfGrid > 100);
        
        createGrids(container, numberOfGrid);
    })
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