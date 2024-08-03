const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  if (display.value.trim() === "") {
    return;
  }

  try {
    let result = eval(display.value);

    if (!isFinite(result) || isNaN(result)) {
      display.value = "Erro";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Erro";
  }
}
