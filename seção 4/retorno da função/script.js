 function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
 }

 const p1 = criaPessoa('Carlos', 'daniel');
 const p2 = {
    nome: 'Joao',
    sobrenome: 'Oliveira'
 };

 console.log(typeof p1);
 console.log(typeof p2);

//  function falaFrase(comeo) {
//     function falaResto(resto) {
//         return comeco + '' + resto;
//     }
//     return falaResto;
//  }
 
//  const fala = falaFrase('Olá');
//  const resto = fala('Mundo!');
//  console.log(resto);
//  //Isso seria util neste codigo:

//  function duplica() {
//     return n*2;
//  }

//  function triplica() {
//     return n*3;
//  }

//  function quadriplica() {
//     return n*4;
//  }

//  console.log(duplica(2));
//  console.log(triplica(2));
//  console.log(quadriplica(2));

 //Nos vamos substituir todas essas funções, por uma só:
 function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
 }

 const duplica = criaMultiplicador(2);
 const triplica = criaMultiplicador(3);
 const quadriplica = criaMultiplicador(4);

 console.log(duplica(2));
 console.log(triplica(2));
 console.log(quadriplica(2));
