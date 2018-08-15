var theButton = document.getElementById("button1");
var total = document.getElementById("theTotal");

theButton.addEventListener("click", sumPress);


function sumPress() {
    total.innerText = parseInt(total.innerText) + 1;
}

var thebutton2 = document.getElementById("button2");
var total2 = document.getElementById("theTotal2");

thebutton2.addEventListener("click", sumPress2);

function sumPress2() {
    total2.innerText = parseInt(total2.innerText) + 1;
}

var reset1 = document.getElementsByClassName("reset");
reset1.addEventListener("reset", sumreset);
function sumreset(){

}