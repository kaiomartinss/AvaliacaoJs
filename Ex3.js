const conjunto = [
  43, 41, 40, 14, 50, 28, 14, 18, 48, 49, 12, 22, 10, 11, 49, 17, 23, 3, 23, 46,
];

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};
function somar(arr) {
  let soma = 0;
  for (let i = 1; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}
const lista = quickSort(conjunto);
const menor = lista[0];
const maior = lista[lista.length - 1];

console.log(`menor: ${menor}, maior: ${maior}, soma: ${somar(lista)}`);
