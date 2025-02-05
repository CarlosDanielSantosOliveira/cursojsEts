/*
Método estatico: método que pode ser acessado sem instanciar a classe.

*/
export class Pessoa {

    static idadePadrao = 0;
    static cpfPadrao = '000.000.999-99';

    constructor(
        public nome: string, 
        public sobrenome: string,
        public idade: number, 
        public cpf: string
    ) {} 
 
    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }

    metodoNormal(): void {
        console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
}

const pessoa = Pessoa.criaPessoa('Maria', 'Teste')
const pessoa2 = new Pessoa('Carlos', 'Daniel', 0, '00000');
console.log(pessoa)
pessoa2.metodoNormal();