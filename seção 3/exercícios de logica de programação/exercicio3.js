// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = fizz
// Número é divisivel por 5 - Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número não é divisivel por 3 e 5 = retorna o proprio numero
// checar se o número é realmente um número
// use a função com números de 0 a 100

function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    if (typeof numero !== 'number') return n;
    return numero;
}

for ( let i = 0; i <= 10; i++) {

    console.log(i, fizzBuzz(i));
}
