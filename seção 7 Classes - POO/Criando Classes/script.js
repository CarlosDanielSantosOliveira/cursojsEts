//Classe é uma forma diferente de voce fazer uma função construtora
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //métodos
    falar() {
        console.log(`${this.nome} está falando`)
    }

    comer() {
        console.log(`${this.nome} está comendo`)

    }

    beber() {
        console.log(`${this.nome} está bebendo`)
    }

}

//Criando o objeto a partir da classe(molde)
const p1 = new Pessoa('carlos', 'daniel')
console.log(p1.beber())


//Fazendo com função construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

//métodos com função construtora
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
}
