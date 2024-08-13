//Tuple é um array com tipo especifico e tamanho especifico.
//Ex:
const dadosCLiente1: [number, string] = [1, 'Luiz'];
const dadosCLiente2: [Number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCLiente3: [Number, string, string?] = [1, 'Luiz', 'Miranda'];
const dadosCLiente4: [Number, string, ...string[]] = [1, 'Luiz', 'Miranda'];

dadosCLiente1[0] = 100;
dadosCLiente1[1] = 'Carlos';


