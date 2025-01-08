
let displayValue = ""
let previousValue = ""
let limitWarning = ""

function addInputValue(input) {
    if (displayValue.length < 24) {
        displayValue = displayValue + input;
    } else {
        limitWarning = "Digits limit reached"
        document.getElementById("Calculator-Display-Warning").innerHTML = limitWarning;
    }
    document.getElementById("Calclator-Dispay-Data").innerHTML = displayValue;
}

function clearInputValue() {
    displayValue = ""
    previousValue = ""
    document.getElementById("Calclator-Dispay-Data").innerHTML = displayValue;
    limitWarning = ""
    document.getElementById("Calculator-Display-Warning").innerHTML = limitWarning;
}


function removeLastInputValue() {
    displayValue = displayValue.slice(0, -1)
    document.getElementById("Calclator-Dispay-Data").innerHTML = displayValue;
    if (displayValue.length < 24) {
        limitWarning = ""
        document.getElementById("Calculator-Display-Warning").innerHTML = limitWarning;
    } else {
        limitWarning = "Digits limit reached"
        document.getElementById("Calculator-Display-Warning").innerHTML = limitWarning;
    }
}


function addition() {
    limitWarning = ""
    document.getElementById("Calculator-Display-Warning").innerHTML = limitWarning;
    previousValue = Number(previousValue) + Number(displayValue)
    displayValue = ""
    document.getElementById("Calclator-Dispay-Data").innerHTML = displayValue;

}

function result() {
    limitWarning = ""
    document.getElementById("Calculator-Display-Warning").innerHTML = limitWarning;
    previousValue = Number(previousValue) + Number(displayValue)
    displayValue = ""
    document.getElementById("Calclator-Dispay-Data").innerHTML = previousValue;
}
