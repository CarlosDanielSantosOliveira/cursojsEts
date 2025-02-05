//Para fazer a restrição, iremos utilizar a palavara extends

type ObterChaveFN = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFN = (objeto, chave) => objeto[chave];

const animal = {
    cor: 'Cinza',
    vacinas: ['Vacina 1', 'Vacina 2'],
    idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, obterChave(animal, 'idade'));