const gridContainer = document.querySelector("#grid-container");
const clearButton = document.querySelector("#clear-button");
const rgbButton = document.querySelector("#rgb-button");
const blackButton = document.querySelector("#black-button");
const slider = document.querySelector("#grid-size-slider");
const sliderValue = document.querySelector("#slider-output");
sliderValue.textContent = slider.value;

let pressedRgb = false; 
let size = 16; 


slider.oninput = function() {
    sliderValue.textContent = this.value; 
    console.log(this.value);
    gridContainer.style.gridTemplateColumns = `repeat(${this.value}, 1fr)`;
    clearGrid();
    drawGrid(this.value);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function getColor(){ 
    return "hsl(" + 360 * Math.random() + ',' +
               (25 + 70 * Math.random()) + '%,' + 
               (85 + 10 * Math.random()) + '%)'
  }

  function clearGrid() {
    gridContainer.innerHTML = "";
    }
  

  function drawGrid(size) {
    for(let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square'); 
        gridContainer.appendChild(square);
        square.addEventListener('mouseenter', (e) => {
            /*
            if(pressedRgb) {
                let red = getRandomInt(255); 
                let green = getRandomInt(255); 
                let blue = getRandomInt(255);
                square.style.background = `rgb(${red}, ${green}, ${blue})`;
            }*/
             if(pressedRgb) {
                square.style.background = getColor();
             }
            
            else {
                square.style.background = "#353839";
            }
            
        })
    }
    
  }

  drawGrid(size);



//'rgb('+red+','+ green+','+ blue+')';
clearButton.onclick = () => {
    console.log('cliked clear');
    clearGrid();
    drawGrid(slider.value);
    
}

rgbButton.onclick = () => {
    pressedRgb = true;
}

blackButton.onclick = () => {
    pressedRgb = false;
}
