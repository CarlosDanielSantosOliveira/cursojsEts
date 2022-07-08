const numeros = [1, 2, 3, 4, 5, 6, 7, 9];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o Número 2');
        continue;
        //aqui estamos falando que se o numero for igual a 2, continuar com a iteração dos outros numeros
        //entao no console o numero 2 nao vai aparecer, vai ser pulado para o 3, pois, a condição foi verdadeira
        //caso a condição seja negativa, vamos sair do bloco e printar os numeros do array.
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }
}

//Fazendo com for in:
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 9];

for (let i in numeros2) {
    let numero = numeros2[i]; //recebendo o número atual do indice.

    if (numero === 2) {
        console.log('Pulei o Número 2');
        continue;
        //aqui estamos falando que se o numero for igual a 2, continuar com a iteração dos outros numeros
        //entao no console o numero 2 nao vai aparecer, vai ser pulado para o 3, pois, a condição foi verdadeira
        //caso a condição seja negativa, vamos sair do bloco e printar os numeros do array.
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }
}

//Fazendo com o for normal

const numeros3 = [1, 2, 3, 4, 5, 6, 7, 9];

for (let indice = 0; indice <= numeros3.length; indice++) {

    let numero = numeros3[indice];

    if (numero === 2) {
        console.log('Pulei o Número 2');
        continue;
        //aqui estamos falando que se o numero for igual a 2, continuar com a iteração dos outros numeros
        //entao no console o numero 2 nao vai aparecer, vai ser pulado para o 3, pois, a condição foi verdadeira
        //caso a condição seja negativa, vamos sair do bloco e printar os numeros do array.
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }
}

//Fazendo com o while

const numeros4 = [1, 2, 3, 4, 5, 6, 7, 9];

let indice2 = 0; //Inicializando a variável de controle

while (indice2 < numeros4.length) {

    let numero = numeros4[indice2];

    if (numero === 2) {
        console.log('Pulei o Número 2');
        indice2++;
        continue;
        //aqui estamos falando que se o numero for igual a 2, continuar com a iteração dos outros numeros
        //entao no console o numero 2 nao vai aparecer, vai ser pulado para o 3, pois, a condição foi verdadeira
        //caso a condição seja negativa, vamos sair do bloco e printar os numeros do array.
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        indice2++;
        break;
    }

    indice2++;
}

