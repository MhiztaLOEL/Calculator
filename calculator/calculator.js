function keyNumbers(number) {
    var text = document.getElementById("screen");
    text.value += number;
}

function clearCalc() {
    var text = document.getElementById("screen");
    text.value = "";
}

function calculate() {
    var text = document.getElementById("screen");
    var answer = eval(text.value);
    text.value = answer;

    var clicked = document.getElementById("clicked");
    clicked.value = "equal";
}

function history() {
    var clicked = document.getElementById("clicked");
    clicked.value = "history";
}