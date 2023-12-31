//new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
    //objA.__proto === Object.prototype
}

const objB = {
    chaveB: 'B'
};

//Para atrelarmos o objeto A como prototype do objB, vamos precisar fazer o seguinte:
Object.setPrototypeOf(objB, objA); //Primeiro pegamos o objeto que queremos que receba o novo prototype e em seguida definimos qual objeto vai ser inserido.

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objC, objB); //Nesse caso, o proto do objC, vai ser o objB e o proto de objB vai ser o objA

//Não é recomendado em um projeto real, mexer no prototype, isso pode afetar a performance.

//Criando um objeto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual /100));
}

const p1 = new Produto('Camiseta', 60);
p1.aumento(100);

console.log(p1)

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);
console.log(p2)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        consfigurable: true,
        enumerable: true,
        value: 145
    },

    tamanho: {
        writable: true,
        consfigurable: true,
        enumerable: true,
        value: 200
    },
})

p3.aumento(10);
console.log(p3);