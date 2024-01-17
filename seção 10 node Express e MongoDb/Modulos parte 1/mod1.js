//Existem maneiras de exportarmos o que existe dentro deste arquivo, que é por mais do exports:
//Tudo isso se transforma em um objeto.

// const nome = 'Daniel';
// const sobrenome = 'Santos Oliveira';

// const falaNome = () => nome + ' ' + sobrenome;

// //Maneiras de exportar:

// /*
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falanome = falanome;
// */

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

// // this.qualquerCoisa = 'O que eu quiser exportar';

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;
