const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'},
];

// const novasPessoas = {};

// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }


const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}
//Dessa forma, o número da chave irá condizer com o id
console.log(novasPessoas.get(2));

//Agora vamos fazer ele nos retornar um array

for (const pessoas of novasPessoas) {
    console.log(pessoas)
}

//excluindo uma chave
novasPessoas.delete(2);
console.log(novasPessoas)