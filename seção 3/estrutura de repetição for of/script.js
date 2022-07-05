const nome = ['Luiz', 'Otávio', 'Henrique'];

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
} //For clássico - Geralmente com iteráveis (array ou strings)

console.log('####');

for (let i in nome) {
    console.log(nome[i]);
} //Retorna o indice ou chave (string, array ou objetos)

console.log('####');

for (let valor of nome) {
    console.log(valor);
} //Retorna o valor em si (iteráveis, arrays, ou strings)

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});