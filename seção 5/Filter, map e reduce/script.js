/*
retorne a soma do dobro de otdos os pares

-> Filtrar pares
-> Dobrar os valores
-> reduzir (somar tudo)
*/
const numeros = [5, 10, 15, 150, 1550];
 
// const numerosPares = numeros.filter(function(valor) {
//     return valor % 2 === 0;
// }).map(function(valor) {
//     return valor * 2; //aqui temos o dobro 
// }).reduce(function(acumulador, valorAtual) {
//     return ac * valor;
// });
// console.log(numerosPares);

//A mesma função, só que em arrow function

const numerosPares2 = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor);

console.log(numerosPares2);