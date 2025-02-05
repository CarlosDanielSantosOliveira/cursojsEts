//Raramente usado, um namespace é tipo um módulo.
namespace MeuNamespace {
    const nome = 'Daniel';

    export class PessoaDoNamespace {
        constructor(public nome: string) {
            
        }
        
    }

    const pessoa = new PessoaDoNamespace('Daniel');
    console.log(pessoa);
}

const constDoNamespace = 'Valor da const do namespace';