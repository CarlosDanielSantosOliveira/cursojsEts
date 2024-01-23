//Recursão mútua é uma função que depende de outra e assim por diante.
const fs = require('fs').promises; //Vai servir escanearmos as pastas 
const path = require('path'); //esse path serve para nós tratarmos os caminhos.

//Dessa forma, eu trouxe o nome do arquivo que estamos mexendo.
// fs.readdir(path.resolve(__dirname))
// .then(files => console.log(files)) //Porque é uma promise
// .catch(e => console.log(e))


async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir);

    walk(files, rootDir);
}

//Essa função serve para escanear a pasta e trazer os arquivos dela
async function walk(files, rootDir) {
 for(let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    //esse stats vai me retornar se é uma pasta ou um arquivo
    const stats = await fs.stat(fileFullPath);
    if(/\.git/g.test(fileFullPath)) continue;

    if(stats.isDirectory()) {
        readdir(fileFullPath);
        continue;
    }

   console.log(fileFullPath);
 }
}

readdir('./');