//Significa que o método nunca vai retornar nada
//Ex: um erro

function criaErro(): never {
    throw new Error('Erro qualquer');
}

criaErro();