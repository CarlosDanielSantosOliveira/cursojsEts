const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); //caminho do arquivo que voce quer escrever
const escreve = require('./modules/escrever');
const ler = require('./modules/ler')

// const pessoas = [
//     {nome: 'Carlos'},
//     {nome: 'Daniel'},
//     {nome: 'teste1'},
//     {nome: 'teste2'},
// ]

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json);

// async function lerArquivo(caminho) {
//     const dados = await ler(caminho);
//     return dados;
// }

// const dadosArquivo = lerArquivo(caminhoArquivo)
//     .then(dados => console.log(dados));

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(element => {
        console.log(element)
    });
}

lerArquivo(caminhoArquivo);