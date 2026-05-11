const display = document.getElementById("display");

// Add any value (number/operator) to screen
function appendValue(value) {
  display.value += value;
}

// Clear everything on screen
function clearDisplay() {
  display.value = "";
}

// Remove last typed character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
  try {
    if (display.value.trim() === "") return;
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
    setTimeout(() => {
      clearDisplay();
    }, 1000);
  }
}

// Keyboard support (optional but useful)
document.addEventListener("keydown", (event) => {
  const key = event.key;
  const operators = ["+", "-", "*", "/", ".", "%"];
  const isNumber = !isNaN(key);

  if (isNumber || operators.includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});