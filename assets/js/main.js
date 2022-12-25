const vegetable = document.querySelectorAll("#veg")
const fruit = document.querySelectorAll("#fruit")
const dragfruit = document.querySelectorAll("#dragareafruit")
const dragveg = document.querySelectorAll("#dragareavegetable")

let dragItem;

vegetable.ondragstart = function() {
    dragItem=this;
}

fruit.ondragstart = function() {
    dragItem=this;
}

dragfruit.ondragover = function(e){
    e.preventDefault();
}

dragveg.ondragover = function(e){
    e.preventDefault();
}

dragfruit.ondrop = function(){
    this.appendChild(dragItem)
}