function ultrapassa() {
  let a = 80000;
  const taxaA = 0.03;
  let b = 200000;
  const taxaB = 1.15;
  let i = 0;

  while (a < b) {
    a += a * taxaA;
    b += b * taxaB;
    i++;
  }
  return `${i} anos`;
}

console.log(ultrapassa());