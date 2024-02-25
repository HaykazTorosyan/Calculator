document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.calculator-text');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    function updateDisplay() {
        display.value = currentInput || '0';
    }

    function handleNumberClick(number) {
        currentInput += number;
        updateDisplay();
    }

    function handleOperatorClick(op) {
        if (currentInput !== '') {
            if (previousInput !== '') {
                calculate();
            }
            operator = op;
            previousInput = currentInput;
            currentInput = '';
        }
        
        updateDisplay();
    }

    function calculate() {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        switch (operator) {
            case '+':
                currentInput = num1 + num2;
                break;
            case '-':
                currentInput = num1 - num2;
                break;
            case '*':
                currentInput = num1 * num2;
                break;
            case '/':
                currentInput = num1 / num2;
                break;
            default:
                break;
        }
        operator = '';
        previousInput = '';
        updateDisplay();
    }

    function handleEqualsClick() {
        if (operator !== '') {
            calculate();
        }
    }

    function handleClearClick() {
        currentInput = '';
        operator = '';
        previousInput = '';
        updateDisplay();
    }

    document.querySelector('.knopk').addEventListener('click', function (event) {
        const clickedElement = event.target;
        if (clickedElement.tagName === 'BUTTON') {
            const buttonValue = clickedElement.innerText;
            if (!isNaN(buttonValue) || buttonValue === '.') {
                handleNumberClick(buttonValue);
            } else if (['+', '-', '*', '/'].includes(buttonValue)) {
                handleOperatorClick(buttonValue);
            } else if (buttonValue === '=') {
                handleEqualsClick();
            } else if (buttonValue === 'AC') {
                handleClearClick();
            }
        }
    });
});