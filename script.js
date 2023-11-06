const btn1 = document.querySelector('#btn-01');
const btn2 = document.querySelector('#btn-02');
const btn3 = document.querySelector('#btn-03');
const btn4 = document.querySelector('#btn-04');
const btn5 = document.querySelector('#btn-05');
const btn6 = document.querySelector('#btn-06');
const btn7 = document.querySelector('#btn-07');
const btn8 = document.querySelector('#btn-08');
const btn9 = document.querySelector('#btn-09');
const btn0 = document.querySelector('#btn-00');
const digitButtons = document.querySelectorAll('[id^="btn-0"]');
const btnClear = document.querySelector('#btn-clear');
const btnBackspace = document.querySelector('#btn-backspace');
const btnRemainder = document.querySelector('#btn-remainder');
const btnDivide = document.querySelector('#btn-divide');
const currentOperandDisplay = document.querySelector('#current-operand');

let currentOperand = "";
let displayValue = "";

function calculate(operand1, operand2, operation) {
    switch(operation) {
        case "+": return operand1 + operand2;
        case "-": return operand1 - operand2;
        case "*": return operand1 * operand2;
        case "/": {
            if(operand2 != 0)
                return operand1 / operand2;
            else return "ERR";
        }
    }
}

function appendDigit(digit) {
    if(!currentOperand.includes('.'))
        currentOperand += digit;
}

digitButtons.forEach(element => {
    element.addEventListener('click', () => {
        appendDigit(element.textContent);
        updateDisplay();
    });
});

