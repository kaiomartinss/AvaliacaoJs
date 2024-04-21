const lista = [37, 26, 13, 1, 41, 11, 19, 29, 11, 2];
let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
  if (lista[i] % 2 == 0) {
    pares++;
  } else {
    impares++;
  }
}
console.log(`${pares} pares, ${impares} ímpares`);