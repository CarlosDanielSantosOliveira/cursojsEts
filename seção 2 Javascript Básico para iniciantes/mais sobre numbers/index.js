//IEEE 754-2008

let num1 = 0.7; //number
let num2 = 0.1; //number

num1 = ((num1 * 100) + (num2 * 100)) / 100; //0;8

console.log(num1);
console.log(Number.isInteger(num1));
//console.log(num1 + num2); //ocorrera uma imprecisão na conta;

/*num1 += num2; // num1 = num1 + num2;
num1 += num2;
num1 += num2;
num1 += num2;

num1 += parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));
/*console.log(num1.toString() + num2); //Convertendo numeros para String.
num1 = num1.toString(); //Dessa fomra faço o num1 ser uma String toda vez que ele for chamado.
REPRESENTAÇÃO BINÁRIA DE UM NÚMERO:
console.log(num1.toString(2));
console.log(num1.toFixed(2)); //Dessa forma eu manipulo as casas decimais de um número muito grande, nesse caso, estou pegando duas casas decimais depois dos primeiros números.
console.log(Number.isInteger(num1)); //Checando se num1 realmente é um número inteiro
let temp = num1 * '5';
console.log(Number.isNaN(temp)); //Aqui estamos verificando se num1 NÃO é um número.
*/
