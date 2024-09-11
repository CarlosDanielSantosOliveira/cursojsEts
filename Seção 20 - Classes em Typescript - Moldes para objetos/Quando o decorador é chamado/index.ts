/*
    Decorator: é um objeto impostor. Ele finge ser o seu objeto, mas no meio do caminho ele pode decorar o seu objeto, ou seja, observar o que o objeto esta fazendo, substituir.
    No typescrpt, ele é uma função chamada em um determinado momento do código,
*/
//Quando o decorador é chamado:

//Decorator de classe:
@inverteNomeECor
export class Animal {
    constructor(public cor: string) {

    }

}

//Esse decorado vai receber a minha classe
function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
    
    return class extends target {

        cor: string;

        constructor(...args: any[]) {
            super(...args);
            this.cor = this.inverte(args[0]);
        }

        inverte(valor: string): string {
            return valor.split('').reverse().join('');
        }
    };
}

const animal = new Animal('roxo');
console.log(animal);