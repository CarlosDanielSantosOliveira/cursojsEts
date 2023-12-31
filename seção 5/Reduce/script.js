//Usamos quando vamos reduzir o array a um elemento só.

//Some todos os números do array e retorne a soma total deles

const numeros = [3, 5, 6, 7, 8, 9, 11, 154];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
   if (valor % 2 === 9){//estou retornando dentro do array, apenas os números pares
    acumulador += valor;
    console.log(valor);
   }
    return acumulador;
}, 0);  //Ele também recebe uma função de callback
console.log(total);

//Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Carlos', idade: 21 },
    { nome: 'Daniel', idade: 20 },
    { nome: 'Victoria', idade: 23 },
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);