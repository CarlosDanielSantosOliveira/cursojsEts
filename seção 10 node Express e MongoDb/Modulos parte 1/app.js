//Importando um módulo:

// const mod1 = require('./mod1').falaNome;
// console.log(mod1)

// const { nome, sobrenome, falaNome } = require('./mod1');
 
const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Luiz');
console.log(p1)