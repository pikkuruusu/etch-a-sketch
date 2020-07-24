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
    sketchBlock.forEach(block => block.addEventListener('mouseover', () => {
        block.style.backgroundColor = 'black';
    }));
}

const randomColorMap = ['FFADAD', 'FFD6A5', 'FDFFB6', 'CAFFBF', '9BF6FF', 'A0C4FF', 'BDB2FF', 'FFC6FF'];


drawBox(16); // 100 seems like a good max
