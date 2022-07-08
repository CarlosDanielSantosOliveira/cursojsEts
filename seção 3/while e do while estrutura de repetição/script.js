//While: Usamos quando não sabemos previamente quantos laços serão executados
const nome = 'Luiz';
 let i = 0;

 while (i < nome.length) {
    console.log(nome[i]);
    i++;
 }

 console.log('Segue a vida...');

 //Exemplo 2
 function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
 }

 const min = 1;
 const max = 50;
 let rand = random (min, max);

 while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
 }

 /* Diferença entre while e do while
 while: Chega a condição e executa o codigo.
 do while: executa o codigo primeiro e depois chega a condição
 */

 do {
    rand = random(min, max);
    console.log(rand);
 } while(rand !== 10);