export class Pessoa {

    constructor(
        private nome: string, 
        private sobrenome: string,
        private idade: number, 
        private cpf: string
    ) {} 

    getIdade(): number {
        return this.idade;
    }

    setCpf(valor: string): void {
        this.cpf = valor;
    }

    getCpf(): string {
        return this.cpf.replace(/\D/g, '');
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}
  
const pessoa = new Pessoa('Carlos', 'Daniel', 23, '123456789');
pessoa.setCpf('123.123.123-12')
console.log(pessoa.getCpf());

