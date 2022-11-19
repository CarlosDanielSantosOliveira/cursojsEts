const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');
console.log(a3);

//spread operator: ... tambem serve para concatenar
const a4 = [...a1, 'daniel', ...a2, ...[7, 8, 9]];
console.log(a4);