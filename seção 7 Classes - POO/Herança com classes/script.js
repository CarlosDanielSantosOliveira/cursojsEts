class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + 'Já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + 'Desligado')
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico("Celular");

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome); //esse super chama o construtor da classe pai
        this.cor= cor;
    }
}

const s1 = new Smartphone('Iphone', 'Branco');
console.log(s1)