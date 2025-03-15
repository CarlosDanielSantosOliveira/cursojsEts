/*
ISP: Interface segregation principle(Princípio da segregação de interface)
os clientes não devem ser forçados a depender de types, interfaces ou classes abstratas que não utilizam
*/

import { Messaging } from "../srp(single responsability principal)/services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "../srp(single responsability principal)/services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart-srp";
import { FiftyPercentDIscount } from "./classes/discount";
import { IndividualCustomer } from "./classes/customer";

const fiftyPercentDiscount = new FiftyPercentDIscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Daniel', 'Oliveira', '123.123.123-12');
const order = new Order(shoppingCart, messaging, persistency, individualCustomer);

shoppingCart.addItem(new Product('Camiseta', 50.00));
shoppingCart.addItem(new Product('Camiseta 2', 50.00));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus)
order.checkout();
console.log(order.orderStatus)