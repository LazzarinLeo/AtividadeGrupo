let acertos = 0;

esconderDiv("telaFinal")
esconderDiv("pergunta2");
esconderDiv("pergunta3");
esconderDiv("pergunta4");
esconderDiv("pergunta5");


document.querySelectorAll("#pergunta1 button").forEach(botao => {
  botao.addEventListener('click', () => {
    esconderDiv("pergunta1");
    if (botao.textContent.trim() === "Júpiter") acertos++;
    mostrarDiv("pergunta2");
  });
});


document.querySelectorAll("#pergunta2 button").forEach(botao => {
  botao.addEventListener('click', () => {
    esconderDiv("pergunta2");
    if (botao.textContent.trim() === "Peru") acertos++;
    mostrarDiv("pergunta3");
  });
});

document.querySelectorAll("#pergunta3 button").forEach(botao => {
  botao.addEventListener('click', () => {
    esconderDiv("pergunta3");
    if (botao.textContent.trim() === "Thomas Edison") acertos++;
    mostrarDiv("pergunta4");
  });
});

document.querySelectorAll("#pergunta4 button").forEach(botao => {
  botao.addEventListener('click', () => {
    esconderDiv("pergunta4");
    if (botao.textContent.trim() === "100ºC") acertos++;
    mostrarDiv("pergunta5");
  });
});

document.querySelectorAll("#pergunta5 button").forEach(botao => {
  botao.addEventListener('click', () => {
    esconderDiv("pergunta5");

    if (botao.textContent.trim() === "206") {
      acertos++;

    }
    alert("Você acertou:" + acertos + "/5")
    mostrarDiv("telaFinal")
  });

});



function esconderDiv(pergunta) {
  document.getElementById(pergunta).style.display = "none";
}

function mostrarDiv(pergunta) {
  document.getElementById(pergunta).style.display = "block";
}

