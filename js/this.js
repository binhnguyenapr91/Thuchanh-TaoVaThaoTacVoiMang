let inputArray = [];

//function to add new array item to the end of array
function addElement() {
    let inputEle = document.getElementById("arrElement").value;
    inputArray.push(inputEle);
}

//function to create a new p element,which display value of array in it's html
function displayElement() {
    for (let index=0;index<inputArray.length;index++){
       let newElement = document.createElement("p");
       newElement.className= "addedElement";
       let parentElement = document.getElementById("result");
       parentElement.appendChild(newElement);
       document.getElementsByClassName("addedElement").item(index).innerHTML = inputArray[index];
    }

}