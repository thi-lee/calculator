/* 
TO DO:
• overflow decimal numbers 
• add negative sign (with the button)
• cannot function if enter a different pair of numbers before clicking 'clear'
*/

/*
Cases: 
• 12 + 2 = 14
• 12 + 2 = 14 4 + 5 = 6
• 12 + 2 - 4 * 3 / 5 = 6
*/

let displayValue = '0'; // what's on the display screen
let firstOperand = null; 
let secondOperand = null; 
let firstOperator = null;
let secondOperator = null;
let result = null;
const buttons = document.querySelectorAll('button');

window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if (displayValue.length > 9) { // avoid overflowing
        display.innerText = displayValue.substring(0,9);
    }
}

updateDisplay();

function click() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if (buttons[i].classList.contains('operand')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
            } else if (buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if (buttons[i].classList.contains('decimal')) {
                inputDecimal(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].classList.contains('percent')) {
                inputPercent(displayValue);
                updateDisplay();
            } else if (buttons[i].classList.contains('sign')) {
                inputSign(displayValue);
                updateDisplay();
            } else if (buttons[i].classList.contains('clear')) {
                clearDisplay();
                updateDisplay();
            }
        })
    }
}

click();

function inputOperand(operand) {
    if (firstOperator === null) {
        if (displayValue === '0' || displayValue === 0) {
            displayValue = operand;
        } else if (displayValue === firstOperand) {
            // handles case when enter new operand with out clearing
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        if (displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
}

function inputOperator(operator) {
    console.log(operator);
    if (firstOperator != null && secondOperator === null) {
        secondOperator = operator;
        secondOperand = dipslayValue;
        result = operate(Number(firstOperand), Number(secondOperand), operator);
        displayValue = roundAccurately(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    } else if (firstOperator != null && secondOperator != null) {
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), operator);
        secondOperator = operator;
        displayValue = roundAccurately(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    } else { 
        // firstOperator == null && secondOperator == null
        firstOperator = operator;
        firstOperand = displayValue;
    }
}

function inputEquals() {
    if (firstOperator === null) {
        displayValue = displayValue;
    } else if (secondOperator != null) {
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        if (result === 'lmao') {
            displayValue = 'lmao';
        } else {
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    } else {
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        if (result === 'lmao') {
            displayValue = 'lmao';
        } else {
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
}

function inputDecimal(dot) {
    if (displayValue === firstOperand || displayValue === secondOperand) {
        displayValue = '0';
        displayValue += dot; 
    } else if (!displayValue.includes.toString(dot)) {
        displayValue += dot;
    }
}

function inputPercent(num) {
    displayValue = (num/100).toString();
}

function inputSign(num) {
    displayValue = (num * -1).toString();
} 

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}

function inputBackSpace() {
    if (firstOperand != null) {
        firstOperand = null;
        updateDisplay();
    }
}

function operate(x, y, op) {
    switch (op) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*':
            return x * y;
            break;
        case '/':
            if (y == 0) {
                return 'lmao';
            } else {
                return x / y;
            }
    }
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}