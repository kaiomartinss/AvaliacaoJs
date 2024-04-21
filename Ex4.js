const form = document.querySelector(".form");
const salarioInput = document.querySelector("#salario-input");
const anoInput = document.querySelector("#ano-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const salario = Number(salarioInput.value);
  const ano = Number(anoInput.value);
  calcSalario(salario, ano);
});

const salario1 = 1000;
const ano1 = 1995;

function anosTrabalhados(ano) {
  const hoje = new Date();
  const anoAtual = hoje.getFullYear(); //2024
  return anoAtual - ano;
}
function calcSalario(salario, ano) {
  const tempo = anosTrabalhados(ano);
  let aumento = 0.015;
  salario += salario * aumento;
  ano++;
  console.log(
    `${ano}, porcentagem: ${aumento * 100}%, salário final: R$${salario}`
  );
  for (let i = 2; i <= tempo; i++) {
    ano++;
    aumento = aumento * 2;
    salario += salario * aumento;
    console.log(
      `${ano}, porcentagem: ${aumento * 100}%, salário final: R$${salario}`
    );
  }
}
calcSalario(salario1, ano1);