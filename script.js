/* 
TO DO:
• overflow decimal numbers 
• add negative sign (with the button)
• cannot function if enter a different pair of numbers before clicking 'clear'
*/

let zero = document.querySelector('.special');

let display = document.querySelector('.display');

let num1 = '';
let num2 = '';
let operator = '';

let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', function() {
        if (operator == '' ) {
            num1 += number.className[7];
            display.textContent = num1;
            console.log(operator, num1, num2);
        } else if (operator != '') {
            num2 += number.className[7];
            display.textContent = num2;
            console.log(operator, num1, num2);
        }
    })
})

let equalSign = document.querySelector('.equal');
equalSign.addEventListener('click', function() {num1 = equal(operator, num1, num2); num2 = ''; operator = ''});

let clear = document.querySelector('.clear');
clear.addEventListener('click', function() {
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = '';
})

let operators = document.querySelectorAll('.operator');
operators.forEach(op => {
    op.addEventListener('click', function() {
        if (operator != '') {
            num1 = equal(operator, num1, num2);
            num2 = '';
        }
        operator = '';
        num2 = '';
        if (op.className == 'operator add orange') {
            operator += '+';
        } else if (op.className == 'operator subtract orange') {
            operator += '-';
        } else if (op.className == 'operator multiply orange') {
            operator += '*';
        } else if (op.className == 'operator divide orange') {
            operator += '/';
        }
    })
})

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return (num1 + num2);
            break;
        case '-':
            return (num1 - num2);
            break;
        case '*':
            return (num1 * num2);
            break;
        case '/':
            (num2 == 0) ? 'lmao' : num1 / num2;
            break;
    }
}

function equal(operator, num1, num2) {
    res = `${operate(operator, Number(num1), Number(num2))}`;
    display.textContent = res;
    num1 = res;
    num2 = '';
    operator = '';
    return res;
}