const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const operate = (...args) => {
    let num1 = parseInt(args[0])
    let operator = args[1]
    let num2 = parseInt(args[2])
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else if (operator == '/') {
        return divide(num1, num2);
    }
}

const inputField = document.querySelector('.input');
const result = document.querySelector('.result')

let inputs = [];

function insertInput(e) {
    inputs.push(e.target.textContent);
    if (e.target.innerText == "=") {
        // console.log(input.innerText.split(""))
        result.textContent = operate(...inputs)
    } else {
        inputField.textContent += e.target.textContent; 
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', insertInput)
})