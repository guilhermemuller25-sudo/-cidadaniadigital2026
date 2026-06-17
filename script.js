// Modo escuro
const btn = document.getElementById("modoEscuro");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Quiz simples
const form = document.getElementById("quiz");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const resposta = document.querySelector('input[name="q1"]:checked');

  if (!resposta) {
    resultado.textContent = "Selecione uma resposta!";
    return;
  }

  if (resposta.value === "errado") {
    resultado.textContent = "✔ Correto! Nem tudo na internet é verdadeiro.";
  } else {
    resultado.textContent = "❌ Incorreto. Cuidado com desinformação!";
  }
});
