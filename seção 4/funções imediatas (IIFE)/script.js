// //Sâo funções auto invocadas
// IIFE -> Immediately invoked function expression

/*
Situação onde é usada: 
Serve para fugirmos de poluir o nosso escopo global
nós nao queremos que nossas funções toquem no escopo global, porque
elas podem ser alteradas e gerar conflitos.
*/
// para criarmos uma função que é invocada automaticamente quando criada
// fazemos dessa forma:

(function(idade, peso, altura) {

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);