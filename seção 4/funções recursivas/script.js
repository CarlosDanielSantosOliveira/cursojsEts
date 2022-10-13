/*
funções recursivas: é uma função que chama ela mesma.
Similar as estruturas de repetição for e while

Vamos criar uma função para contar de um a dez
*/

function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(0);