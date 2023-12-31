//Essa função faz a mesma coisa que a função pop, push, unshift e o que shift faz e mais um pouco, porem, ela é um pouco complicada.

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice que vou começar a mexer, quantos elementos vou remover do array, elementos para adicionar separados por virgula)
//sintaxe final: nomes.splice(indice, delete, elem1, elem2, elem3);

//Removendo o ultimo elemento do meu array
//pop
//nomes.splice(4, 1); //removendo do meu indice 4, 1 elemento
//diferente do pop, que retorna o elemento que foi deletado, essa função retorna o array.

/* Para que eu consiga retornar o array e os elementos deletados, eu teria que fazer o seguinte:
*/
const pop = nomes.splice(4, 1);
console.log(nomes, pop)

//removendo com numeros negativos
const removidos2 = nomes.splice(-2, Number.MAX_VALUE);
//dessa forma ele começa do -2 e remove ate o elemento maximo que o array tem.

//shift
const removidoes3 = nomes.splice(0, 1) //removendo o primeiro indice

//push
const adicionar = nomes.splice(nomes.length, 0, 'Luiz', 'Otavio'); //adicionar 1 elemento no final do array

//unshift (adicionar no começo do array)
const adicionar2 = nomes.splice(0, 0, 'Carlos', 'Daniel');

