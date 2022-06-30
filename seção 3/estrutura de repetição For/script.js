//Checando se um numero é par ou impar:
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par + "primeiro console");
}

//Percorrendo um array com um for
const frutas = ['Maçã', 'Pêra', 'Uva', 'Laranja', 'Pera', 'Jabuticaba', 'Abacaxi'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}