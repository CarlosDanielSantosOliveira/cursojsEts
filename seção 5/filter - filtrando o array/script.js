/*

//Retorne números maiores que 10
*/

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 11, 15, 22, 27];

// //Função de callback

// function callbackFilter(valor) {
//     return valor > 10;
// }
// //Criamos essa função de callback, pois, o parâmetro do método filter espera uma callback
// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);

//Nós podemos fazer com uma função anônima também

// const numerosFiltrados = numeros.filter( function(valor) {
//     return valor > 10;
// });

//Utilizando com arrow function
// const numerosFiltrados = numeros.filter(valor => {
//     return valor > 10;
// });

//Otimizando mais o codigo com arrow function
// isso é uma função de callback otimizada
// const numerosFiltrados = numeros.filter(valor => valor > 10);


//Filter vai sempre retornar um array, com a mesma quantidade de elementos do array original, ou menos.

//Execício

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Carlos', idade: 26 },
    { nome: 'Daniel', idade: 31 },
    { nome: 'Victoria', idade: 42 },
    { nome: 'Enzo', idade: 23 },
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50 );
console.log(pessoasComMaisDeCinquentaAnos)

const pessoasCujoONomeTerminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'))
console.log(pessoasCujoONomeTerminaComA)