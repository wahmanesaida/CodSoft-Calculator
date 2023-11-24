let display = document.getElementById("display");
let currentInput = "";

function appendToDisplay(value) {
  currentInput += value;
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.innerText = "0";
}

function calculateSquareRoot() {
  try {
    currentInput = Math.sqrt(eval(currentInput)).toString();
    display.innerText = currentInput;
  } catch (error) {
    display.innerText = "Error";
  }
}

function calculatePercentage() {
  try {
    currentInput = (eval(currentInput) / 100).toString();
    display.innerText = currentInput;
  } catch (error) {
    display.innerText = "Error";
  }
}

function toggleSign() {
  try {
    currentInput = (-eval(currentInput)).toString();
    display.innerText = currentInput;
  } catch (error) {
    display.innerText = "Error";
  }
}


function clearLastDigit() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput === "" ? "0" : currentInput;
}



function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.innerText = currentInput;
  } catch (error) {
    display.innerText = "Error";
  }
}
