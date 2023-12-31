// //Vai alterar os valores do array
// //Vai receber um array exatamente do mesmo tamanho que o array original, so que com os valores alterados
// //A map vai receber uma função de callback, parametros com valor, nao vai mexer no array original, vai retornar um novo array

// //Exercício: Dobre os números:

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const numerosEmDobro = numeros.map(function (valor) {
//     // return `Carlos -> ${valor}`; //Dessa forma, meu nome vai ser imprimido antes de todos os valores do array
//     return valor * 2; //Multiplicando todos os valores de cada indice do array.
// });

// console.log(numerosEmDobro);

// //A mesma função de cima, so que como arrow function
// const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const numerosEmDobro2 = numeros.map ( valor => 
//     // return `Carlos -> ${valor}`; //Dessa forma, meu nome vai ser imprimido antes de todos os valores do array
//     valor * 2 //Multiplicando todos os valores de cada indice do array.
// );

// console.log(numerosEmDobro);

/*
Para cada elemento:
retorne apenas uma string com o nome da pessoa
remova apenas a chave "Nome" do objeto
adicione uma chave id em cada objeto
*/

const pessoas = [
    { nome: 'Daniel', idade: 21 },
    { nome: 'Carlos', idade: 22 },
    { nome: 'Victoria', idade: 23 },
    { nome: 'Enzo', idade: 11 },
    { nome: 'Diana', idade: 36 },

]

const nomes = pessoas.map(objeto => objeto.nome);
// retorne apenas uma string com o nome da pessoa

const idades = pessoas.map(obj => ({idade: obj.idade }));
// remova apenas a chave "Nome" do objeto

// const comIds = pessoas.map(function(obj, indice) {
//     obj.id = (indice + 1) * 1000;
//     return obj;
// })

// adicione uma chave id em cada objeto
// console.log(comIds);
//Da forma que estas variaveis estão, nos estamos alterando o array original. Para que nós nao alteremos o array original, podemos fazer da seguinte forma:

const comIds2 = pessoas.map(function(obj, indice) {
    const newObj = { ...obj }; //funciona tanto para objetos quanto para arrays
    newObj.id = indice;
    return newObj;
});
console.log(comIds2)

