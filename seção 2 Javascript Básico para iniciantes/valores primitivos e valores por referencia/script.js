/* 
Primitivos(imutaveis): string, number, boolean, undefined, null (bigint, symbol) //valores de referência.
Referência (mutável) - array, object, function. são dados que são passados por referência.
*/
/*
Exemplo do porque falamos que valores primitivos são imutaveis:


let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0]);
*/
//Nesse caso o indice 0 do array não vai ser alterado, pois, estamos tentando alterar através de uma variável, e dessa forma não é possivel, a string vai continuar sendo luiz, a string é imutavel..

/*let a = [1, 2, 3];
let b = a;
console.log(a, b);
//Estão apontando para o mesmo local na memória.
*/
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);
//Se eu quisesse que b não apontasse pro mesmo endereço que 'a' na memória, eu faria uma coisa chamada spreading, spreading é:
//só usar ... antes do valor que vou passar em b