//é um bloco de codigo que executa uma ação.

function saudacao (nome) {
    return `Bom dia ${nome}!`;
}

//any = qualquer tipo de dado
//quando usamos essa estrutura de função, nós não precisamos colocar ponto e virgula.

//Salvando a função em uma variável:
const variavel = saudacao('Daniel')
console.log(variavel);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,2));
console.log(soma(5,6));
console.log(soma(7,8));

//Criando função dentro de uma variável:
const raiz = function (n) {
    return n ** 0.5;
};
//Neste caso preciso do ponto e virgula
console.log(raiz(9));
console.log(raiz(16));

//Arrow Function: Podemos fazer desta forma
const soma = (n) => {
    return n + 5;
}
//ou dessa
const divisao = n => n / 5;