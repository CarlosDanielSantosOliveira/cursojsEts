//Argumentos que sustentam todos os argumentos enviados, para isso serve a palavra reservada arguments, é uma
// função do javascript que vai fazer todos esse papel de argumentos enviados, mesmo que nao haja argumento na criação da função, e sim, no envio. 

function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c)
}
funcao(1, 2, 3, 4, 5, 6, 7);


function funcao2(a, b = 2, c = 3) {
    console.log(total, a, b, c)
}
funcao2(2);
//Aqui nesse caso, mesmo que nao estamos passando nos argumentos de envio quanto vale o B e o C, o javascript reconhece os valores
// porque eles foram passados no parametro da função. Caso eu enviasse com algum número, iria substituir os numeros passados no parametro.

function funcao(valor1, valor2, valor3) {
    console.log(valor1, valor2, valor3);
}
let obj = { nome: 'Luiz', sobrenome: 'Otávio', idade: 23 };
funcao(obj);
//Aqui é uma função via desestruturação 
