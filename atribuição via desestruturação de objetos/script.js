const pessoa = {
    //nome: 'Carlos',
    sobrenome: 'Daniel',
    idade: 21,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Essa é a atribuição normal
const nomee = pessoa.nome;
console.log(nomee);

//Essa é a atribuição via desestruturação
const { nome = "carlos", sobrenome } = pessoa;
console.log(nome, sobrenome);

const { endereco: { rua, numero } } = pessoa; //extraimos a rua e o numero do objeto endereco
console.log(rua, numero);