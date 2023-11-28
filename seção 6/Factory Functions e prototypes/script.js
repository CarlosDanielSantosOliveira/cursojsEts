//A seguir estamos fazendo uma composição(mixing) que é quando pegamos métodos e jogamos em um objeto que nao possui herança ou hierarquia
const falar = {
    falar() {
        console.log(`${this.nome} está falando.`)
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`)
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`)
    },
};


const pessoaPrototype = Object.assign({}, falar, comer, beber);

//Vamos criar aqui um objeto que vai ser o prototype de pessoa

function criaPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototype, { //Aqui colocamos as propriedades que estão no parâmetro da função criaPessoa
        nome: {value: nome}, //Cada propriedade vai ter uma chave, onde vamos poder dizer se ele é writeble, enumerable e etc...
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.falar());