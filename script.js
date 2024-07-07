const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let displayValue = '0';
let evalStringArray = [];

const updateDisplay = (clickObj) => {
    const btnText = clickObj.target.innerText;

    if (btnText === 'DEL') {
        displayValue = displayValue.slice(0, -1) || '0';
        if (displayValue === '0') evalStringArray = [];
    } else if (btnText === 'RESET') {
        displayValue = '0';
        evalStringArray = [];
    } else if (btnText === '=') {
        evalStringArray.push(displayValue);
        try {
            const evaluation = eval(evalStringArray.join(''));
            displayValue = evaluation + '';
        } catch (error) {
            displayValue = 'Error';
        }
        evalStringArray = [];
    } else if (btnText === '+' || btnText === '-' || btnText === '/' || btnText === '*') {
        if (displayValue !== '' && displayValue !== 'Error') {
            evalStringArray.push(displayValue);
            evalStringArray.push(btnText);
            displayValue = '';
        }
    } else {
        if (displayValue === '0' || displayValue === 'Error') {
            displayValue = btnText;
        } else {
            displayValue += btnText;
        }
    }

    display.innerText = displayValue;
};

buttons.forEach((button) => {
    button.addEventListener('click', updateDisplay);
});
