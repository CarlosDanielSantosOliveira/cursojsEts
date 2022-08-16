//Declaração de Função
falaOi();
function falaOi() {
    console.log('Oi');
}
//Quando declaramos a função desta maneira, acontece algo chamado hoisting
//O hoisting acontece quando usamos uma variavel antes de declara-la, pois a engine do javascript vai jogar esse função para o topo do arquivo em questão de execução, entao podemos usar a função onde quisermos.

//Funções são First-class objects (Objetos de primeira classe).
//A seguir vamos ter uma Function expression, que é quando atribuimos a uma variavel, uma função.
const souUmDado = function() { //Função anônima: é uma função sem nome.
    console.log('Sou um dado.');
}
souUmDado();

//Arrow Function: é uma function expression também, porém, mais curta.
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();


const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};
obj.falar();
