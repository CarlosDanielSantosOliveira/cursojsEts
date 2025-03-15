export abstract class Discount {
    protected discount = 0;

    calculate(price: number) : number{
        return price - price * this.discount;
    } //Esse método foi criado para ser chamado através das extensões de Discount
}

export class FiftyPercentDIscount extends Discount {
     protected readonly discount = 0.5;
}