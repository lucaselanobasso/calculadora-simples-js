const display = document.getElementById("tela");

function mostrarNaTela(input) {
  display.value += input;
}

function limparTela() {
  display.value = "";
}

function calcular() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
