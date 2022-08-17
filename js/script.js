let range = document.getElementById('range');
let value = document.querySelector('.value');
let container = document.querySelector('.container');
let colorPicker = document.getElementById('colorPicker');
let containerBox;

range.defaultValue = 16; // default grid value.

//Function to create grid.
function creategrid(size) {
    for(let i = 0; i < size*size; i++) {
        let div = document.createElement('div');
        div.className = "box";
        div.style.border = "1px solid black";
        console.log("div created");
        container.appendChild(div);
    }
};

//function to remove all previous div. 
function removeElements() {
    let boxes = document.querySelectorAll('.box');
    if(boxes === null) {
        return;
    }
    boxes.forEach(box => {
        box.remove();
    })
}

//default grid creation.
creategrid(16);
container.setAttribute('style' , "grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);");
containerBox = document.querySelectorAll('.box');

//add event listner to default divs created so to change color of the divs.
for(let i = 0; i < containerBox.length; i++) {
    containerBox[i].addEventListener('mouseenter' , () => {
        containerBox[i].style.background = "blue";
    })
}

//event listner if user change the grid size.
range.addEventListener('input' , () => {
    value.innerHTML = range.value + " * " + range.value;
    removeElements(); // remove all previous div.
    
    // create new grid of value provided by user.
    creategrid(range.value);
    containerBox = document.querySelectorAll('.box'); 
    container.setAttribute('style' , `grid-template-columns: repeat(${range.value}, 1fr);grid-template-rows: repeat(${range.value}, 1fr);`)

    //add a event listner to the newly created grid.
    for(let i = 0; i < containerBox.length; i++) {
        containerBox[i].addEventListener('mouseenter' , () => {
            containerBox[i].style.background = "blue";
        })
    }
});
