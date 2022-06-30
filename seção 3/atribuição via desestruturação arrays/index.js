let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [1, 2, 3];
[a, b, c] = numeros;

console.log(a, b, c);

//A desestruturação neste caso é quando nós pegamos o array de a b c e redeclaramos o valor de cada variável, desestruturando eles e substituindo seus valores antigos, assim fazendo a atribuição. 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numbers; //os três pontos servem para pegar o resto do array numbers
console.log(primeiroNumero, segundoNumero);
console.log(resto);

const numeross = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeross[1][2]); //estou acessando o array de indice 1 e o valor do indice 2 do array 1

//Fazendo a atribuição via desestruturação:
const [,[,,seis]] = numeross; //estou acessando o array de indice 1 e o valor que esta no indice 2 do array de indice 1
console.log(seis);

