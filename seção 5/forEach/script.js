//Ele só esta disponivel dentro de arrays

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//iterar com for of:
for (let valor of a1) {
    console.log(valor);
}

//Com for each, a diferença dele para map, vilter e reduce, é que ele apenas vai iterar nos valores do array, ele nao vai retornar um novo valor 
a1.forEach(function(valor, indice, array) {
    //console.log(valor, indice, array);
    console.log(array[indice] + "array com indice")
})

a1.forEach(valor => console.log(valor));

//simulação de reduce
let total = 0;
a1.forEach(valor => {
    total += valor;
});
console.log(total);