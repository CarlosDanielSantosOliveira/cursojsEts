 const verdadeira = true;

let nome = "carlos";
//posso redeclarar a variavel nome
var nome2 = "carlos";
//Não posso redeclarar variaveis que são let

if (verdadeira) {
    let nome = "daniel";
    //let tem escopo de bloco {...}, ou seja, nao estou redeclarando, estou criando dentro deste bloco uma variavle chamada nome, é UMA OUTRA variavel, nao a mesma criada fora do bloco
    //var so tem escopo de função

    if (verdadeira) {
        var nome2 = "carlos";
        let nome = 'Outra coisa';
        console.log(nome, nome2);
         
    }
}