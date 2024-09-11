/*
    Decorator: é um objeto impostor. Ele finge ser o seu objeto, mas no meio do caminho ele pode decorar o seu objeto, ou seja, observar o que o objeto esta fazendo, substituir.
    No typescrpt, ele é uma função chamada em um determinado momento do código,
*/

//Decorator de classe:
 
//Esse decorado vai receber a minha classe

//Composição de decorators

type Constructor = {
    new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
    //Closure 
    return function <T extends Constructor>(target: T): T {
        console.log('Sou o decorador e recebi', target);

        return class extends target {
    
            cor: string;
    
            constructor(...args: any[]) {
                super(...args);
                this.cor = this.inverte(args[0]);
            }
    
            inverte(valor: string): string {
                return valor.split('').reverse().join('') + param1 + ' ' + ' ' + param2;
            }
        };
    }
}

function outroDecorador(target: Constructor) {
    console.log("Sou o outro decorador");
    return target;
}

@outroDecorador
@inverteNomeECor('Valor1', 'Valor2')
export class Animal {
    constructor(public cor: string) {
        console.log('Sou a classe')
    }

}

const animal = new Animal('roxo');
console.log(animal);