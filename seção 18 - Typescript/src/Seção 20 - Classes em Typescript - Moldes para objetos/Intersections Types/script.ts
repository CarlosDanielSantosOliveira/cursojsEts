//é um & ou AND, ele é tratado como uma intersection 
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
    idade: 30,
    nome: 'Carlos',
    sobrenome: 'Daniel',
}

console.log(pessoa);

//Module mode
export { pessoa };
