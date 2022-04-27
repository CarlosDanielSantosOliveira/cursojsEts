//Array é uma lista de coisas
              //012345678910111213
const nome = 'Carlos Daniel';
                 // 0      1      2
const alunos = ['Luiz', 'Carlos', 'Daniel']; //uma lista/coleção de nomes/strings
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

//Editando um indice de um array:
alunos[0] = 'Victoria';
console.log(alunos);

//Adicionando um indice a mais no array
alunos[3] = 'Ruan';
console.log(alunos)

//Adicionando um indice a mais no array, caso não saiba o tamanho total do Array
alunos[alunos.length] = 'Sara';
alunos[alunos.length] = 'Enzo';
console.log(alunos)

//E existe uma função que adiciona mais um indice no array, sem a necessidade de sabermos o tamanho:
alunos.push('Michel');
alunos.push('Diana');

console.log(alunos);

//para adicionar um indice no >COMEÇO< do array, usamos a função:
alunos.unshift('Djalma');
alunos.unshift('Milce');
console.log(alunos);

//para remover um índice do array:
alunos.pop();
console.log(alunos);

//Retornando através de uma variável o dado que estava no indice removido:
const removidoPop = alunos.pop();
console.log(removidoPop);
console.log(alunos);

//Para remover do começo, usamos:
const removidoShift = alunos.shift();
console.log(removidoShift);
console.log(alunos);

//Caso eu queira remover, sem modificar os indices:
delete alunos[1];
console.log(alunos[1]);

//Acessando um indice que não existe:
console.log(alunos[50]);

//Caso eu queira buscar os indices do 0 ate o 2, vou precisar especificar no slice do numero 0 ao 3.
console.log(alunos.slice(0, 3));

//Se eu quiser buscar o penultimo elemento do array, posso fazer desta forma:
console.log(alunos.slice(0, -1));