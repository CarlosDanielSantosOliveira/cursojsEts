//Utilizamos quando temos mais de um tipo de retorno
function addOrConcat(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    if (typeof a === 'string' && typeof b === 'string') return a + b;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('a', 'b'));
console.log(addOrConcat('10', 20));