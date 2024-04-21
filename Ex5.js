const raioInput = document.querySelector("#raio");
const form = document.querySelector(".form");
const pArea = document.querySelector(".p-area");
const pPerimetro = document.querySelector(".p-perimetro");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const raio = parseFloat(raioInput.value);
  exibirResultado(raio);
});

function perimetro(r) {
  return 2 * 3.14 * r;
}
function area(r) {
  return 3.14 * r ** 2;
}
function exibirResultado(r) {
  const a = area(r).toFixed(2);
  const p = perimetro(r).toFixed(2);
  pArea.innerText = `A área do círculo é ${a}cm`;
  pPerimetro.innerText = `O perímetro do círculo é ${p}cm`;
}