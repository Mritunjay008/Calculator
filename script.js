const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
    display.classList.remove('error-font'); // Remove error font class
}

function clearDisplay() {
    display.value = "";
    display.classList.remove('error-font'); // Remove error font class
}

function calculate() {
    try {
        display.value = eval(display.value);
        display.classList.remove('error-font'); // Remove error font class if evaluation is successful
    } catch (error) {
        display.value = "ERROR";
        display.classList.add('error-font'); // Add error font class if there is an error
    }
}
