/*
    Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura
    de uma imagem (number).
    Retorne true se a imagem estiver no modo paisagem.
*/

let paisagem = Boolean;

function ePaisagem (largura, altura) {
    if (largura > altura) {
        paisagem = true;
    }

    return false;
}

console.log(ePaisagem(199, 1999));