//São funções que retornam objetos
//Constructor function (função construtora)
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome, 

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor) {
            //para extrair o primeiro nome
            valor = valor.split(' ');
            this.nome = valor.shift(); //Vai retornar o valor pra variavel e remover do array
            console.log(valor);
            //Agora virou um array
        },


        fala(assunto = 'cozinhando') {
            return `${this.nome} ' ' ${assunto}.`;
        },

        altura: altura,
        peso: peso,

        //Getter
        get imc() { //método
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('carlos', 'daniel', 100, 1.7);
p1.nomeCompleto = "Carlos Daniel Santos Oliveira";
console.log(p1.imc);

const p2 = criaPessoa('Victoria', 'anuzzi', 57, 1.7);
console.log(p2.imc);

console.log(p1.nomeCompleto);

//esta função de cima é a factory function 

/*
Vantagens de utilizar uma factory function ou constructor function:
ambas fazem as mesmas coisas, voce escolhe qual vai preferir fazer


*/
