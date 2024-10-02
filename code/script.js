let display = document.getElementById('display');
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
  display.value = display.value + number;
}

function setOperation(operation) {
  firstOperand = parseFloat(display.value);
  currentOperation = operation;
  display.value = '';
}

function calculate() {
  let secondOperand = parseFloat(display.value);
  if (currentOperation && firstOperand !== null) {
    switch (currentOperation) {
      case '+':
        display.value = firstOperand + secondOperand;
        break;
      case '-':
        display.value = firstOperand - secondOperand;
        break;
      case '*':
        display.value = firstOperand * secondOperand;
        break;
      case '/':
        display.value = firstOperand / secondOperand;
        break;
    }
    currentOperation = null;
    firstOperand = null;
  }
}

function clearDisplay() {
  display.value = '';
  currentOperation = null;
  firstOperand = null;
}