//DefineProperty - para definir uma propriedade
//DefineProperties - para definir varias

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave quando fazemos um for in
        value: estoque, //valor da chave
        writable: false, //Dessa forma fica impossivel alterar o valor de estoque
        configurable: true //Pode re-configurar a propriedade?
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.nome);

const p2 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p2));

for(let chave in p2) {
    console.log(chave);
}