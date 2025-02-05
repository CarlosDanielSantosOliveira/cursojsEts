//Declaration merging: duas interfaces que se unem

interface Pessoa {
    nome: string;
};

interface Pessoa {
    readonly sobrenome: string;
}

interface Pessoa {
    readonly enderecos: string[];
}

interface Pessoa {
    idade?: number;
}

const pessoa: Pessoa = {
    nome: 'Carlos',
    sobrenome: 'Daniel',
    enderecos: ['Savoy'],
    idade: 23,
};

pessoa.enderecos.push('Rua teste');
console.log(pessoa);