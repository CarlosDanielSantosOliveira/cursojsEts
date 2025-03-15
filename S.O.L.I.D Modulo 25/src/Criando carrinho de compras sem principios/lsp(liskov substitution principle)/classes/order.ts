import { OrderStatus } from "./interfaces/order-status";
import { Messaging } from "../../srp(single responsability principal)/services/messaging";
import { Persistency } from "../../srp(single responsability principal)/services/persistency";
import { ShoppingCart } from "./shopping-cart-srp";

export class Order {
    private _orderStatus: OrderStatus = 'open';

    constructor(private readonly cart: ShoppingCart, private readonly messaging: Messaging, private readonly persistency: Persistency,) {

    }

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log('Seu carinho está vazio');
            return;
        }

        this._orderStatus = 'closed';
        
        this.messaging.sendMessage(`seu pedido com total de ${this.cart.totalWithDicount()} foi recebido.`);
        this.persistency.saveOrder();
        this.cart.clear();
    }

   

}