//Esse tipoPessoa vai ser uma interface

interface TipoNome {
     nome: string;
}

interface TipoSobrenome {
    sobrenome: string;
}

interface TipoNomeCompleto {
    nomeCompleto(): string;
}

//A única diferença entre o type Alias e a interface é a forma de voce extender varios tipos, exemplo:

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto{}

export class Pessoa implements TipoPessoa2 { //Estou implementando a interface TipoPessoa nessa classe.
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoaObj: TipoPessoa2 = {
    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    },
    nome: 'Daniel',
    sobrenome: 'Agora tá ok',
};

const pessoa = new Pessoa('carlos', 'Daniel');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());