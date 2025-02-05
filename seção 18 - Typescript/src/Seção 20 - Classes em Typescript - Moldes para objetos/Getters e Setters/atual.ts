export class Pessoa {

    constructor(
        private nome: string, 
        private sobrenome: string,
        private idade: number, 
        private _cpf: string
    ) {
        this.cpf = _cpf;
    } 

    getIdade(): number {
        return this.idade;
    }

    set cpf(valor: string){
        this._cpf = valor;
    }

    get cpf(): string {
        return this._cpf.replace(/\D/g, '');
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}
  
const pessoa = new Pessoa('Carlos', 'Daniel', 23, '123456789');
pessoa.cpf = '123.123.123-12'
console.log(pessoa.cpf);

