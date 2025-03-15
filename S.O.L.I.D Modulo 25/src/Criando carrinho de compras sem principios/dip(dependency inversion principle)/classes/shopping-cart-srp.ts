import { Discount } from "./discount";
import { CartItem } from "./interfaces/cart-item";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";

export class ShoppingCart implements ShoppingCartProtocol{
    //readonly significa que não pode ser alterado, o underline significa que é privado
    private readonly _items: CartItem[] = [];
 
    constructor(private readonly discount: Discount) {}

    get items(): Readonly<CartItem[]> {
        return this._items;
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

    totalWithDicount(): number {
        return this.discount.calculate(this.total());   
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    clear(): void {
        console.log('Carrinho foi limpo')
        this._items.length = 0;
    }
}

