//Métodos estáticos são métodos que podemos usar na classe sem precisar instanciar a classe, sem utilizar a palavra NEW e não estarão disponiveis dentro da instancia
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    //Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar.')
    }
    
}

const controle1 = new ControleRemoto('Lg');

//Chamando métodos por instância
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

//Chamando método estático da classe
ControleRemoto.trocaPilha();

console.log(controle1);