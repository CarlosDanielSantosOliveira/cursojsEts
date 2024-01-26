const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag: 'w'}); //Aqui estamos criando um arquivo. O 'w' serve para apagar tudo do arquivo, caso ele ja exista.
};

 