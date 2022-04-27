const pessoa1 = {
    nome: 'Carlos',
    sobrenome: 'Daniel',
    idade: 21
}; 

const pessoa2 = {
    nome: 'Victoria',
    sobrenome: 'Anuzzi',
    idade: 22
}; 

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1);

//Criando uma função para a criação de objetos
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        //ou
        /*
        nome, 
        sobrenome,
        idade
        */

        //metodo fala
        fala () {
            console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        },

        incrementaIdade() {
            this.idade++;
        },

        falaIdade () {
            console.log(`a minha idade atual é ${this.idade}`);
        }
    };
}

const pessoa5 = criaPessoa('carlos', 'Daniel', '21');
console.log(pessoa5.nome);
const pessoa6 = criaPessoa('Victoria', 'Anuzzi', '21');
console.log(pessoa5.nome);
const pessoa7 = criaPessoa('Enzo', 'gabriel', '21');
console.log(pessoa5.nome);

console.log(pessoa5, pessoa6, pessoa7)

pessoa5.incrementaIdade();
pessoa5.falaIdade();
pessoa5.fala();