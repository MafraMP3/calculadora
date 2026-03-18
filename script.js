let display = document.getElementById("screen");
let currentInput = " ";
let currentOperator = " ";

function adicionarnumero(valor){
    currentInput += valor;
    display.textContent = currentInput;
}

function adicionaroperador(operador){
    if (currentInput === " " && operador !== ".") return
    currentInput += operador;
    display.textContent = currentInput;
}

function calcular(){
    try{
        let resultado = eval(currentInput)
        if(!Number.isInteger(resultado)){
            resultado = resultado.toFixed(2)
        }
        currentInput = resultado;
    display.textContent = currentInput;
    } catch(erro){
    display.textContent = erro;
    currentInput = "";
    }
}

function limpar(){
    currentInput = "";
    display.textContent = "";
}

function deletar(){
    currentInput = currentInput.slice(0,-1);
    display.textContent = currentInput;
}