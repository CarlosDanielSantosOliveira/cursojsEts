//Significa que vamos utilizar valores como tipos.
let x = 10;
x = 0b1010;

x = 'Luiz'; //O js não permite fazer essa troca de tipos.

const y = 10;
const a = 100;

const pessoa = {
    nome: 'Carlos' as const,
    sobrenome: 'Daniel',
}

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    return cor;
}

console.log(escolhaCor('Vermelho'));
//Module mode
export default 1;