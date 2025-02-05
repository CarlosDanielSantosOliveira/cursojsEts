//Usamos quando precisamos acessar algo da super classe(classe mãe), mas não queremos mudar o comportamento real do método.
export class Pessoa {
    sala: string;

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

export class Aluno extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        sala: string
    ) {
        super(nome, sobrenome, idade, cpf);
        this.sala = sala;
    } //Basicamente estamos criando um construtor para aluno, mas depois passamos os valores para o construtor de pessoa

    getNomeCompleto(): string {
        console.log('Fazendo algo Antes');
        return super.getNomeCompleto();
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return 'Isso vem do Cliente' + this.nome + ' ' + this.sobrenome; //Assim funciona o polimorfismo, o método é o mesmo, mas estamos mudando o que ele vai retornar
    }
}

const aluno = new Aluno('Carlos', 'Daniel', 23, '123456789', '01');
const pessoa = new Pessoa('Carlos', 'Daniel', 23, '123456789');
const cliente = new Cliente('Carlos', 'Daniel', 23, '123456789');

