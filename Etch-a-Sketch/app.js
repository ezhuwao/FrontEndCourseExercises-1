const layout = document.createElement('div');
layout.setAttribute('id', 'setLayout');

const container = document.getElementById('container');
const buttonSection = document.createElement('section');
buttonSection.setAttribute('id', 'buttonClick');
const button = document.createElement('button');
buttonSection.appendChild(button);
button.innerText = 'Clear Screen on Click';
layout.append(container, buttonSection);
document.body.appendChild(layout);

document.querySelector(`#buttonClick`).addEventListener(`click`, 
   function () {
      makeRows(0,0);
     let newRows = prompt('Enter the new number of rows that you would want to create the grid with');
     let newCols = prompt('Enter the new number of columns that you would want to create the grid with');
     makeRows(newRows, newCols);

   }
);

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c=0; c < (rows * cols); c++){
        let cell = document.createElement("div");
        cell.innerText = (c+1);
        container.appendChild(cell).className ="grid-item";
    };
};

makeRows(16, 16);


