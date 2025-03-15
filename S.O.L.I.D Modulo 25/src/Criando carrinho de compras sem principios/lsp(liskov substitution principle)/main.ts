/*
LSP:
Subtipos precisam ser substituíveis por seus tipos de base.
Se meu programa espera um Animal, algo do tipo Cachorro(que herda de animal) deve servir como qualquer outro Animal.
*/

import { Messaging } from "../srp(single responsability principal)/services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "../srp(single responsability principal)/services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart-srp";
import { FiftyPercentDIscount } from "./classes/discount";

const fiftyPercentDiscount = new FiftyPercentDIscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 50.00));
shoppingCart.addItem(new Product('Camiseta 2', 50.00));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus)
order.checkout();
console.log(order.orderStatus)