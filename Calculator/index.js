let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = 8;
document.getElementById("num2-el").textContent = 2;

let addRes = 0
let subRes = 0
let mulRes = 0
let divRes = 0

function add() {
    addRes = num1 + num2;
    document.getElementById("sum-el").textContent = "Sum: " + addRes
}

function subtract() {
    subRes = num1 - num2;
    document.getElementById("sub-el").textContent = "Subtraction: " + subRes
}

function multiply() {
    mulRes = num1 * num2;
    document.getElementById("mul-el").textContent = "Multiplication: " + mulRes
}

function divide() {
    divRes = num1 / num2;
    document.getElementById("div-el").textContent = "Division: " + divRes
}