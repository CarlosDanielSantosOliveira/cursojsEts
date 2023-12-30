const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        console.log("GETTER")
       return this[_velocidade];
    }

    set velocidade(valor) {
        console.log("SETTER")

        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if(this[_velocidade] >= 100) return; 
            this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--
    }
}

const c1 = new Carro('Fusca');

c1.velocidade = 99;
console.log(c1.velocidade)
//Utilizando esse Symbol, nós estamos bloqueando a propriedade velocidade, para que ela nao seja acessada de fora do objeto.
