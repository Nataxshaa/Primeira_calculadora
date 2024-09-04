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



function theme() {
    const checkbox = document.getElementById('checkbox'); 
    const corpo = document.querySelector('body');
    const calculadora = document.querySelector('.titulo');
    const botoes = document.querySelectorAll('.botao');

    if (checkbox.checked) {
        corpo.setAttribute('class', 'dark');
        calculadora.classList.add('tLight');
        calculadora.classList.remove('tDark');
        botoes.forEach(botao => {
            botao.classList.add('bDark');
            botao.classList.remove('bLight');
        });
    } else {
        corpo.setAttribute('class', 'light');
        calculadora.classList.add('tDark');
        calculadora.classList.remove('tLight');
        botoes.forEach(botao => {
            botao.classList.add('bLight');
            botao.classList.remove('bDark');
        });
    }
}



