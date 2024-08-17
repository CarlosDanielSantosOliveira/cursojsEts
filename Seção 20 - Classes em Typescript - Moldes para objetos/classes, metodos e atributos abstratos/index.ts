/*
Classe abstrata: é um contrato para que outras classes herdem tudo o que houver nela, mas agora não é possível instanciar essa classe diretamente, só vamos conseguir instancia-la através das subclasses
*/

export abstract class Personagem {

    protected abstract emoji: string; //protected não pode ser acessado fora da classe.

    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number,
    ) {}

    atacar(personagem: Personagem): void {
        this.bordao();
        personagem.perderVida(this.ataque);
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque;
        console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`);
    }

    abstract bordao(): void;
   
}

export class Guerreira extends Personagem {
    protected emoji = '\u{1f9DD}';
    
    bordao(): void {
        console.log(this.emoji + "Ataque da guerreira");
    }
}
export class Monstro extends Personagem {
    protected emoji = '\u{1F9DF}';

    bordao(): void {
        console.log(this.emoji +  "Ataque do monstro");
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);

monstro.atacar(guerreira);

guerreira.atacar(monstro);

monstro.atacar(guerreira);

guerreira.atacar(monstro);

monstro.atacar(guerreira);