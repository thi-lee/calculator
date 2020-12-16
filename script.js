/* 
TO DO:
• overflow decimal numbers 
• add negative sign (with the button)
• adjust last row so zero takes up 2fr while . and = takes 1
• color
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
        } else if (num1 != '' && num2 == '' && operator != '') {
            num2 += number.className[7];
            display.textContent = num2;
        } else if (num1 != '' && num2 == '' && operator == '') {
            display.textContent = '';
            num1 = '';
            num1 += number.className[7];
            display.textContent = num1;
        }
    })
})

let equal = document.querySelector('.equal');
equal.addEventListener('click', function() {
    res = `${operate(operator, Number(num1), Number(num2))}`;
    display.textContent = res;
    num1 = res;
    num2 = '';
    operator = '';
})

let operators = document.querySelectorAll('.operator');
operators.forEach(op => {
    op.addEventListener('click', function() {
        operator = '';
        if (op.className == 'operator add orange') {
            operator += '+';
        } else if (op.className == 'operator subtract orange') {
            operator += '-';
        } else if (op.className == 'operator multiply orange') {
            operator += '*';
        } else if (op.className == 'operator divide orange') {
            operator += '/';
        }
        console.log(operator);
    })
})

let clear = document.querySelector('.clear');
clear.addEventListener('click', function() {
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = '';
})

let sign = document.querySelector('.sign');
sign.addEventListener('click', function() {
    
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
            return (num1 / num2);
            break;
    }
}