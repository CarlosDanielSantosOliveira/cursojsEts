export class Empresa {
    public readonly nome: string; //Readonly significa que não pode ser alterado
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador)
        }
    }

    public getNome(): string {
        return this.nome;
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string,  
        public readonly sobrenome: string,
    ) {

    }
}


const empresa1 = new Empresa('Udemy', '123456789');
console.log(empresa1)
console.log(empresa1.nome) //Consigo printar esse nome porque o modificador dele é public.
const colaborador1= new Colaborador('Luiz', 'Carlos')
console.log(colaborador1)
empresa1.adicionaColaborador(colaborador1);
console.log("DADOS DA EMPRESA:", empresa1)
empresa1.mostrarColaboradores()
console.log(empresa1.getNome());

/*
public: significa que podemos acessar dentro e fora da classe.
private: Só vou poder manipular dentro da classe. Eu posso dispobilizar esse atributo fora da classe, através dos atributos.

*/