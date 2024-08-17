//Composição é quando um objeto tem outro objeto como parte dele.
export class Carro {
    private readonly motor = new Motor();

    ligar(): void{
        this.motor.ligar();
    }

    acelerar(): void {
        this.motor.acelerar();
    }

    parar(): void {
        this.motor.parar();
    }

    desligar(): void {
       this.motor.desligar();
    }
}

export class Motor {
    ligar(): void{
        console.log('Motor está ligando...');
    }

    acelerar(): void {
        console.log('Motor está acelerando...');
    }

    parar(): void {
        console.log('Motor está parando...');
    }

    desligar(): void {
        console.log('MOtor está lgiando...')
    }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();