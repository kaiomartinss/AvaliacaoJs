var alunos = [
  {
    nome: "Maria Joaquinha",
    notas: [8, 7.5, 9],
    curso: "Sistemas para Internet",
  },
  { nome: "João Ricardo", notas: [8, 8.5, 5], curso: "Direito" },
  { nome: "José Henrique", notas: [4, 10, 7], curso: "Administração" },
  {
    nome: "Pedro da Silva",
    notas: [6, 7.6, 7.5],
    curso: "Sistemas para Internet",
  },
  {
    nome: "Silvana Morais",
    notas: [6, 7.5, 9.5],
    curso: "Sistemas de Informação",
  },
  { nome: "Patricia Castro", notas: [1, 9, 10], curso: "Arquitetura" },
  { nome: "Joana Ribeiro", notas: [8, 9, 9], curso: "Contabilidade" },
  { nome: "Rafael Rocha", notas: [4, 4, 9], curso: "Sistemas para Internet" },
  {
    nome: "Gustavo Henrique",
    notas: [8, 7.5, 5],
    curso: "Sistemas para Internet",
  },
];
function getAprovados(lista) {
  const aprovados = [];
  for (let i of lista) {
    let soma = 0;
    for (let j of i.notas) {
      soma += j;
    }

    i.media = (soma / 3).toFixed(2);

    if (i.media >= 7) {
      aprovados.push(i);
    }
  }
  return aprovados;
}
function exibirAprovados(lista) {
  const a = getAprovados(lista);
  for (let i of a) {
    console.log({
      nome: i.nome,
      media: i.media,
      curso: i.curso,
    });
  }
}
exibirAprovados(alunos);