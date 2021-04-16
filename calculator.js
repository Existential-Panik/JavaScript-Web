
//Declare the values of numbers,operations,buttons and others from HTML
const numberButtons = document.querySelectorAll('[data-numbers]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButtons = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete');
const allClearButton  = document.querySelector('[data-all-clear]');
const previousOperand = document.querySelector('[data-previous]');
const currentOperand = document.querySelector('[data-current]');

function appendNum(number) {
    if (number === '.' && (currentOperand.innerText).includes('.')) return;
    currentOperand.innerText = currentOperand.innerText.toString() + number.toString();
}
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNum(button.innerText)
    })
});

allClearButton.addEventListener('click', () => {
    currentOperand.innerText = '';
    previousOperand.innerText = '';
});

