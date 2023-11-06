const digitButtons = document.querySelectorAll('[id^="btn-0"]');
const operationButtons = document.querySelectorAll('[id^="btn-op"]');
const clearBtn = document.querySelector('#btn-clear');
const backspaceBtn = document.querySelector('#btn-backspace');
const equalBtn = document.querySelector('#btn-equal');
const currentOperandDisplay = document.querySelector('#current-operand');
const previousOperandDisplay = document.querySelector('#previous-operand');

let currentOperand = '&nbsp';
let previousOperand = '&nbsp';
let operation = "";

function calculate(operand1, operand2, operation) {
    console.log(operation == '&#43')
    switch(operation) {
        case '+': 
            console.log(operand1 + operand2);
            return operand1 + operand2;
        case '-': return operand1 - operand2;
        case '×': return operand1 * operand2;
        case '÷': {
            if(operand2 != 0)
                return operand1 / operand2;
            else return "ERR";
        }
        case '%': {
            if(operand2 != 0)
                return operand1 % operand2;
            else return "ERR";
        }
    }
}

function appendDigit(digit) {
    if(currentOperand == '&nbsp')
        currentOperand = digit;
    else {
        if((digit === '.' && currentOperand.includes('.')) || currentOperand == "ERR") return;
        else currentOperand += digit;
    }
}

function backspace() {
    if(currentOperand == "ERR") clearAll(); 
    if(currentOperand != '&nbsp')
        currentOperand = currentOperand.slice(0, -1);
    if(currentOperand == "")
        currentOperand = '&nbsp';  
}

function clearAll() {
    currentOperand = '&nbsp';
    previousOperand = '&nbsp';
    operation = "";
}

function updateDisplay() {
    currentOperandDisplay.innerHTML = currentOperand;
    previousOperandDisplay.innerHTML = previousOperand + ' ' + operation;
}


backspaceBtn.addEventListener('click', () => {
    backspace();
    updateDisplay();
    
});

clearBtn.addEventListener('click', () => {
    clearAll();
    updateDisplay();
});

digitButtons.forEach(elem => {
    elem.addEventListener('click', () => {
        appendDigit(elem.textContent);
        updateDisplay();
    });
});

operationButtons.forEach(elem => {
    elem.addEventListener('click', () => {
        if(currentOperand === '&nbsp') return;
        else {
            if(currentOperand != "ERR") {
                if(previousOperand != '&nbsp') {
                    previousOperand = calculate(parseFloat(previousOperand), parseFloat(currentOperand), operation).toString();
                    currentOperand = '&nbsp';
                    operation = elem.textContent;
                }
                else {
                    operation = elem.textContent;
                    previousOperand = currentOperand;
                    currentOperand = '&nbsp';
                }

                updateDisplay(); 
            }
        }
    });
});

equalBtn.addEventListener('click', () => {
    if(previousOperand === '&nbsp') return;
    else {
        currentOperand = calculate(parseFloat(previousOperand), parseFloat(currentOperand), operation).toString();
        previousOperand = '&nbsp';
        operation = '';
        updateDisplay();
    }
});
