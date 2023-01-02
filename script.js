const operate = (...args) => {
    let a = parseInt(args[0])
    let operator = args[1]
    let b = parseInt(args[2])
    switch (operator){
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": 
            if (b == 0) {
                console.log("Divide by 0 is not possible");
                return "Bruh";
            } else {
                return a / b; 
            }
        default:
          console.log("Unknown operator: " + operator);
          return NaN;
      }
}

const evaluate = (numsArray, opsArray) => {
    if (opsArray.length + 1 != numsArray.length) {
        console.log("Error: Array lengths mismatch");
        return;
    }

    let resultSoFar = numsArray[0];
    let index = 1;
    let result = opsArray.reduce((total, currentValue) => {
        return operate(total, currentValue, numsArray[index++])  
    }, resultSoFar)
    // console.log(result);
    return result;
}

const getDigits = ((string) => {
    return string.split(/[\+\-\/\*]/)
})

const inputField = document.querySelector('.input');
const result = document.querySelector('.result')

let inputs = [];
let ops = [];

function insertInput(e) {
    if (e.target.textContent == "=") {
        // console.log(input.innerText.split(""))
        inputs = getDigits(inputField.textContent);
        result.textContent = evaluate(inputs, ops)
    } 
    else if (isNaN(Number(e.target.textContent))){
        if (e.target.innerText == 'C') {
            inputs = []
            ops = []
            inputField.textContent = '';
            result.textContent = '';
        } else {
            inputField.textContent += e.target.textContent;
            ops.push(e.target.textContent);
        }
    }
    else {
        inputField.textContent += e.target.textContent; 
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', insertInput)
})