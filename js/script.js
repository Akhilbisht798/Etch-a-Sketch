let range = document.getElementById('range');
let value = document.querySelector('.value');
let container = document.querySelector('.container');

function creategrid(size) {
    for(let i = 0; i < size*size; i++) {
        let div = document.createElement('div');
        div.className = "box";
        div.style.border = "1px solid black";
        console.log("div created");
        container.appendChild(div);
    }
};

function removeElements() {
    let boxes = document.querySelectorAll('.box');
    if(boxes === null) {
        return;
    }
    boxes.forEach(box => {
        box.remove();
    })
}


range.addEventListener('input' , () => {
    value.innerHTML = range.value;
    removeElements();
    creategrid(range.value);
    container.setAttribute('style' , `grid-template-columns: repeat(${range.value}, 1fr);grid-template-rows: repeat(${range.value}, 1fr);`)
});

let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter' , () => {
            box.style.backgroundcolor = "red"
        })
    })
