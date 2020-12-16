let calculator = document.querySelector('.calculator');
let add = document.querySelector('.add');
for (i = 0; i <= 9; i++) {
    let button = document.createElement('button');
    button.textContent = i;
    calculator.insertBefore(button, add).classList.add('number', i);
}

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
        } else {
            num2 += number.className[7];
            display.textContent = num2;
        }
    })
})

let equal = document.querySelector('.equal');
equal.addEventListener('click', function() {
    res = `${operate(operator, Number(num1), Number(num2))}`;
    display.textContent = res;
    num1 = res;
    num2 = '';
})

let operators = document.querySelectorAll('.operator');
operators.forEach(op => {
    op.addEventListener('click', function() {
        operator = '';
        if (op.className == 'operator add') {
            operator += '+';
        } else if (op.className == 'operator subtract') {
            operator += '-';
        } else if (op.className == 'operator multiply') {
            operator += '*';
        } else if (op.className == 'operator divide') {
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