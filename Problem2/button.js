const output = document.getElementById("output");
const theButton = document.getElementById("theButton");
const theInput = document.getElementById("theInput");


function addText(event) {
    const inputVal = theInput.value ;
    console.log(inputVal)
    const star= '*'
    for(i=0;i<=inputVal;i++){
        output.innerHTML += "<div>" + star.repeat(i) + "</div>";
    }
    
}

theButton.addEventListener("click", addText);


theInput.addEventListener("keyup", logInput);