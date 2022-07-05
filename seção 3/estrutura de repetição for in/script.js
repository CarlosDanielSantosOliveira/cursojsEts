//Vetor = um array de uma unica dimensão
//For in -> lê os índices ou chaves do objeto

const frutas = ['Pera', 'Maçã', 'Uva'];

for (let indice in frutas) {
    console.log(frutas[indice]); 
}

const pessoa = {
    nome: 'carlos',
    sobrenome: 'daniel',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}