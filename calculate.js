/*let valorDoDisplay = '' // declando a varóavel 

function numeros(value){ // tem algum erro na função 
    valorDoDisplay += value;
    document.getElementById('visor').value = valorDoDisplay;
}  // função dos números para aparecer no visor e incremetando 
//o valor que vai passar a ter quando digitar os números

function apagar(){ // funão 'C' que éo apagar 
    valorDoDisplay = '';
    document.getElementById('visor').value = valorDoDisplay;
}

function calcular(){ // Função calcular e capturar erros 
    try {
        valorDoDisplay = eval(valorDoDisplay);
        document.getElementById('visor').value = valorDoDisplay;
    } catch(e){
        document.getElementById('visor').value = 'error';
    }
}*/

let displayValue = '';

function appendToDisplay(value){
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function ClearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch(e){
        document.getElementById('display').value = 'error';
    }
}