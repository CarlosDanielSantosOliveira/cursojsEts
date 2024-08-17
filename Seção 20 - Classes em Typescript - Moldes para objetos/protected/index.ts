import { Colaborador, Empresa } from "../Modificadores de acesso/Classe";

export class Pessoa {

    constructor(
        public nome: string, 
        public sobrenome: string,
        private idade: number, 
        protected cpf: string
    ) {} 

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

export class Udemy extends Empresa {
    constructor() {
        super('Udemy', '12345456');
    }

    popColaborador(): Colaborador || null {
        const colaborador = this.colaboradores.pop();
        if(colaborador) return colaborador;
        return null;
    }
}

export class Aluno extends Pessoa {
    getNomeCompleto(): string {
        return 'Isso vem do Aluno' + this.nome + ' ' + this.sobrenome;
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return 'Isso vem do Cliente' + this.nome + ' ' + this.sobrenome; //Assim funciona o polimorfismo, o método é o mesmo, mas estamos mudando o que ele vai retornar
    }
}

const aluno = new Aluno('Carlos', 'Daniel', 23, '123456789');
const pessoa = new Pessoa('Carlos', 'Daniel', 23, '123456789');
const cliente = new Cliente('Carlos', 'Daniel', 23, '123456789');

