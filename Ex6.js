const form = document.querySelector(".form");
const capitalInput = document.querySelector("#capital");
const tempoInput = document.querySelector("#tempo");
const jurosInput = document.querySelector("#juros");
const montante = document.querySelector(".montante");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const capital = parseFloat(capitalInput.value);
  const tempo = parseInt(tempoInput.value);
  const juros = parseFloat(jurosInput.value) / 100;
  exibirResultado(capital, tempo, juros);
});

function total(c, t, i) {
  return c * (1 + i) * t;
}
function exibirResultado(c, t, i) {
  const resultado = total(c, t, i).toFixed(2);
  montante.innerText = `O retorno do seu investimento de R$${c} após ${t} meses será de R$${resultado}`;
}