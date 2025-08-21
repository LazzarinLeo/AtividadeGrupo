const botoes = document.querySelectorAll("button");
let acertos = 0
botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    if (botao.textContent === "Júpiter") {
      esconderDiv("pergunta1");
      acertos++
      mostrarDiv("pergunta2");
    }
    else{
        esconderDiv("pergunta1");
        console.log(acertos);
        mostrarDiv("pergunta2");
    }
  });
});

function esconderDiv(pergunta) {
  document.getElementById(pergunta).style.display = "none";
}

function mostrarDiv(pergunta) {
  document.getElementById(pergunta).style.display = "block";
}
