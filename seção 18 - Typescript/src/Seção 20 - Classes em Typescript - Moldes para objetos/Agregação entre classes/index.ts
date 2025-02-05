//Agregação é quando um objeto precisa de outro.
export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = [];

    inserirProdutos(...produtos: Produto[]) {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }

    quantidadeProdutos(): number {
        return this.produtos.length;
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0)
    }
}

export class Produto {
    constructor(public nome: string, public preco: number) {

    }
}

const produto1 = new Produto('Camiseta1', 50.0);
const produto2 = new Produto('Camiseta2', 51.0);
const produto3 = new Produto('Camiseta3', 52.0);
const produto4 = new Produto('Camiseta4', 53.0);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProdutos());