function drawBox(squareCount) {
    const sketchContainer = document.querySelector('#sketch-container');

    sketchContainer.style.gridTemplateColumns = `repeat(${ squareCount }, 1fr)`; 
    sketchContainer.style.gridTemplateRows = `repeat(${ squareCount }, 1fr)`; 

    for (i = 0; i < (squareCount * squareCount); i++) {
        let div = document.createElement('div');
        div.classList.add('sketch-block')

        sketchContainer.appendChild(div);
    }

    let sketchBlock = sketchBlockEvent();
    
    sketchBlock.forEach(block => block.style.backgroundColor = 'rgba(255,255,255,1');
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

function drawBlackBox() {
    if (this.classList.contains('isGray')) {
        this.classList.remove('isGray');
    };
    this.style.opacity = 1;
    this.style.backgroundColor = 'rgba(0,0,0,1)';
}

function drawRainbowBox() {
    if (this.classList.contains('isGray')) {
        this.classList.remove('isGray');
    };
    this.style.opacity = 1;
    let randomSelector = Math.floor(Math.random() * 8);
    const randomColorMap = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];
    let color = randomColorMap[randomSelector];

    this.style.backgroundColor = color;
}

function drawGrayBox() {
    if (this.style.opacity >= 0.1 && this.classList.contains('isGray')) {
        this.style.opacity = parseFloat(this.style.opacity) + 0.1;
    } else {
        this.style.opacity = 0.1;
    };
    this.style.backgroundColor = 'rgba(0,0,0)'
    if (!this.classList.contains('isGray')) {
        this.classList.add('isGray');
    };
}

let activeFunctionality = drawBlackBox;

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', reset);

const blackBtn = document.querySelector('#blackBtn');
blackBtn.addEventListener('click', () => {
    let previousFunctionality = activeFunctionality;
    activeFunctionality = drawBlackBox;
    sketchBlockEvent(previousFunctionality);
})

const rainbowBtn = document.querySelector('#rainbowBtn');
rainbowBtn.addEventListener('click', () => {
    let previousFunctionality = activeFunctionality;
    activeFunctionality = drawRainbowBox;
    sketchBlockEvent(previousFunctionality);
})

const grayBtn = document.querySelector('#grayBtn');
grayBtn.addEventListener('click', () => {
    let previousFunctionality = activeFunctionality;
    activeFunctionality = drawGrayBox;
    sketchBlockEvent(previousFunctionality);
})

function sketchBlockEvent(previousFunctionality) {
    const sketchBlock = document.querySelectorAll('.sketch-block');
    sketchBlock.forEach(block => block.removeEventListener('mouseover', previousFunctionality));
    sketchBlock.forEach(block => block.addEventListener('mouseover', activeFunctionality));
    return sketchBlock;
}

drawBox(16); // 100 seems like a good max
