function drawBox(squareCount) {
    const sketchContainer = document.querySelector('#sketch-container');

    sketchContainer.style.gridTemplateColumns = `repeat(${ squareCount }, 1fr)`; 
    sketchContainer.style.gridTemplateRows = `repeat(${ squareCount }, 1fr)`; 

    for (i = 0; i < (squareCount * squareCount); i++) {
        let div = document.createElement('div');
        div.classList.add('sketch-block')

        sketchContainer.appendChild(div);
    }

    const sketchBlock = document.querySelectorAll('.sketch-block');
    sketchBlock.forEach(block => block.style.backgroundColor = 'rgba(255,255,255,1');

    sketchBlock.forEach(block => block.addEventListener('mouseover', () => {
        block.style.backgroundColor = 'rgba(0,0,0,1)';
    }));
}

function reset() {
    let squareCount = prompt('How many boxes wide should we make the grid? (1-100)');
    while (true) {
        if (squareCount === null) {
            return;
        }
        squareCount = parseInt(squareCount, 10);
        if (!Number.isInteger(squareCount) || squareCount < 1 || squareCount > 100) {
            squareCount = prompt('Yeah, that is not a good number of boxes. Try something between one and a hundred.')
        } else {
            break;
        }
    }
    drawBox(squareCount);
}

const randomColorMap = ['FFADAD', 'FFD6A5', 'FDFFB6', 'CAFFBF', '9BF6FF', 'A0C4FF', 'BDB2FF', 'FFC6FF'];

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', reset);

drawBox(16); // 100 seems like a good max
