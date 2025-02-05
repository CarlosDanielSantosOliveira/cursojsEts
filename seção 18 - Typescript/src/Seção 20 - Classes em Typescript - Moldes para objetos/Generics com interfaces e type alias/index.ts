interface PessoaProtocolo<T, U> {
    nome: T;
    sobrenome: T;
    idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
    nome: 'Carlos',
    sobrenome: 'Daniel',
    idade: 23,
};

const aluno1: PessoaProtocolo<string, number> = {
    nome: 'Carlos2',
    sobrenome: 'Daniel2',
    idade: 23,
};

console.log(aluno, aluno1);

