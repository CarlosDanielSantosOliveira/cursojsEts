//Escreva uma função que recebe 2 números e retorne o maior deles

function retornaNumMaior(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(retornaNumMaior("Utilizando function normal" + 10, 154));
//Utilizando arrow function

const max2 = (x, y) => {
    return x > y ? x : y;
};

console.log("Utilizando arrow function" + max2(12, 42))

//Utilizando arrow function em apenas uma linha:
const max3 = (x, y) => x > y ? x : y;

console.log("Utilizando arrow function em uma linha só" + max3(12, 42))



 