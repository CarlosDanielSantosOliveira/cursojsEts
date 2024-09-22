//Estrutura de dados não ordenada, utilizada para enumerar coisas

enum Cores {
    VERMELHO, //0 
    AZUL, //1
    AMARELO, //2
}

console.log(Cores);
console.log(Cores.VERMELHO);

function escolhaACor(cor: Cores): void {
    console.log(Cores[cor]);
}

escolhaACor(123456);