const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
console.log(pessoa['nome']); //aqui estamos acessando o valor do atributo do objeto através da notação de colchete, também podemos acessar pela notação de ponto que seria: pessoa.nome
console.log(pessoa['sobrenome']);

const chave = 'nome';
//A unica forma de eu acessar o valor dessa variavel, é usando a notação de colchete
console.log(pessoa[chave]);

const pessoa1 = new Object();
pessoa1.nome = 'Daniel';
pessoa1.idade = 21;

//apagar a chave nome:
delete pessoa1.nome;
console.log(pessoa1);

//funções dentro do objeto
const pessoa2 = new Object();
pessoa2.nome = 'Daniel';
pessoa2.idade = 21;
pessoa2.falarNome = function() {
    return(`${this.nome} está falando o seu nome`)
};
pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
pessoa2.falarNome();
console.log(pessoa2.getDataNascimento());

//pegando os dados do objeto utilizando for in 
for (let chave in pessoa2) {
    console.log(chave + " Dados do objeto");
}

//Quando functions estão dentros de objetos, nós chamamos de métodos.

//Funções para criar objetos:
//Factory functions / Constructor functions
//utilizando factory function para construir um objeto
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Carlos', 'Daniel');
console.log(p1.nomeCompleto());


//Usando constructor functions 
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Carlos', 'Daniel');
Object.freeze(p2); //Dessa forma estamos bloqueando o objeto para que ele nao seja alterado
//Sim, nós podemos mudar o valor de nome ou sobrenome, mesmo sendo usando const. Pois, p1, ainda esta apontando pro mesmo endereço de memória, só daria essa caso tentassemos mudar isso.
console.log(p2);

p2 = 'Outra coisa'; //Não pode, estou alterando o endereço de memoria da constante
p2.nome = 'Outra coisa'; //Posso fazer isso, pois estou alterando apenas o valor, não o endereço.

const p3 = new Pessoa('Victoria', 'Anuzzi');
console.log(p3);