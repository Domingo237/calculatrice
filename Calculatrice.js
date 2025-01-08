const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function appendDot() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function appendFunction(func) {
    display.value += func;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}