//Esse tipoPessoa vai ser um Type
//Em type, todos atributos e métodos serão publicos.

type TipoPessoa = {
     nome: string;
     sobrenome: string;
     nomeCompleto: () => string;
}

export class Pessoa implements TipoPessoa { //Estou implementando a interface TipoPessoa nessa classe.
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('carlos', 'Daniel');
console.log(pessoa.nomeCompleto());