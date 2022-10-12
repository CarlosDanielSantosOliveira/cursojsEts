/*Diferença das factory functions para a função construtora:

Factory Functions: é uma função normal que criamos e ela retorna um objeto, fazemos ela retornar um objeto
voluntariamente.

Funções Construtoras: na função construtora ja fazemos muita coisa automaticamente, ja criamos o objeto e retornamos
ele 

Na função construtora nós mudamos a forma de como escrevemos a função. 

Exemplo: 
Factory function: criamos a função dando um nome, como exemplo:
criaPessoa() {}

Função construtora: criamos ela instanciando a palavra new seguido pelo nome do objeto:
*/

//Código de como é feito uma classe de um objeto através de uma função:
function Pessoa (nome, sobrenome) {

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um método');
    }
}

//Agora vamos instanciar esse objeto. Podemos criar varias variáveis que vão se tornar objetos, com apenas o objeto PESSOA
const p1 = new Pessoa('carlos', 'daniel');
const p2 = new Pessoa('fulano', 'cicrano');

//Agora vamos chamar o método pelo objeto que criamos 
p1.metodo();

//A palavra new cria um novo objeto vazio 