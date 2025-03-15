/*
DIP: Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes, Detalhes devem depender de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são calssses que gerenciam as classes de baixo nível.
*/

import { Messaging } from "../srp(single responsability principal)/services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "../srp(single responsability principal)/services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart-srp";
import { FiftyPercentDIscount } from "./classes/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";
import { MessagingProtocol } from "./classes/interfaces/messaging-protocol";

const fiftyPercentDiscount = new FiftyPercentDIscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Daniel', 'Oliveira', '123.123.123-12');

const enterpriseCustomer = new EnterpriseCustomer('Teste1', '2313123132');

class MessagingMock implements MessagingProtocol {
    sendMessage(msg: string): void {
        console.log("A mensagem foi enviada pelo Mock")
    }
}
const messagingMock = new MessagingMock();

const order = new Order(shoppingCart, messagingMock, persistency, individualCustomer);



shoppingCart.addItem(new Product('Camiseta', 50.00));
shoppingCart.addItem(new Product('Camiseta 2', 50.00));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus)
order.checkout();
console.log(order.orderStatus)