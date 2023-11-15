let currentInput = "";
let history = [];

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    const result = eval(currentInput);
    document.getElementById("display").value = result;
    appendToHistory(currentInput, result); 
    currentInput = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
    currentInput = "";
  }
}

function appendToHistory(expression, result) {
  history.push(`${expression} = ${result}`);
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById("display").value = currentInput;
  }
  
function showHistory() {
  if (history.length === 0) {
    alert("No history available.");
    return;
  }

  let historyText = "Calculator History:\n\n";
  historyText += history.join("\n");

  alert(historyText);
}
