let display = document.getElementById("screen");
let currentInput = " ";
let currentOperator = " ";

function adicionarnumero(valor){
    currentInput += valor;
    display.textContent = currentInput;
}

function adicionaroperador(operador){
    if (currentInput === " " && operador !== ".") return
}