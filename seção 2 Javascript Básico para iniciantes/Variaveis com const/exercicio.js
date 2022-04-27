/*
Carlos Daniel tem 20 anos, pesa 95 kg
tem 1.7 de altura e seu IMC é de 32.9
*/

const nome = 'Carlos Daniel';
const idade = '20';
let peso = 95;
const altura = 1.7;
let imc = peso / (altura * altura);
let peso2 = 83;
let imcAtualizado = peso2 / (altura * altura); 

console.log(nome + ' ' + 'tem' + ' ' + idade + ' ' + 'anos, pesa' + peso + ' ' + 'kg, tem' + altura + ' ' + 'e seu IMC é: ' + ' ' + imc + ' ' + 'seu IMC atualizado é: ' +  imcAtualizado);
console.log(nome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'e seu IMC é: ', imc, 'seu IMC atualizado é: ', imcAtualizado);
console.log(`${nome} tem ${idade} anos, pesa ${peso} kg tem ${altura} e seu IMC é:  ${imc} seu IMC atualizado é:  ${imcAtualizado}`);
