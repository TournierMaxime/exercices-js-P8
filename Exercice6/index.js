const display = document.getElementById('display');

const appendToDisplay = (value) => {
    display.value += value;
}

const clearDisplay = () => {
    display.value = '';
}

const calculateResult = () => {
    try {
        if (display.value.includes('/0')) {
            display.value = 'Division by zero is not allowed';
        } else {
            const result = eval(display.value);
            display.value = result;
        }
    } catch (error) {
        display.value = 'Erreur';
    }
}