const tela = document.getElementById("tela");

function mostrarNaTela(input) {
  tela.value += input;
}

function limparTela() {
  tela.value = "";
}

function calcular() {
  try {
    tela.value = eval(tela.value);
  } catch (error) {
    tela.value = "Erro";
  }
}
