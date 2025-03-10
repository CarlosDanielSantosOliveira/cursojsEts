type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
    //readonly significa que não pode ser alterado, o underline significa que é privado
    private readonly _items: CartItem[] = [];
    private _orderStatus: 'open' | 'closed' = 'open';

    get items(): Readonly<CartItem[]> {
        return this._items;
    }

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    addItem(item: CartItem): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    //Esse + converte string para number
    total(): number {
        return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
    }

    checkout(): void {
        if (this.isEmpty()) {
            console.log('Seu carinho está vazio');
            return;
        }

        this._orderStatus = 'closed';
        this.sendMessage(`seu pedido com total de ${this.total()} foi recebido.`);
        this.saveOrder();
        this.clear();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    sendMessage(msg: string): void {
        console.log("Mensagem enviada:", msg);
    }

    saveOrder(): void {
        console.log('Pedido salvo com sucesso...');
    }

    clear(): void {
        console.log('Carrinho foi limpo')
        this._items.length = 0;
    }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({name: 'Camiseta', price: 50.00});
shoppingCart.addItem({name: 'Caderno', price: 5.00});
shoppingCart.clear();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus)