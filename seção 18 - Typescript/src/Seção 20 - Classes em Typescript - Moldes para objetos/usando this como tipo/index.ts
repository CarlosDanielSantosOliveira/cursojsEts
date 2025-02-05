export class Calculadora {
    constructor(public numero: number) {}

    add(n: number): this {
        this.numero += n
        return this;
        //Retornar o this significa que estou retornando a propria instância.
    }

    sub(n: number): this {
        this.numero -= n
        return this;
        //Retornar o this significa que estou retornando a propria instância.
    }

    div(n: number): this {
        this.numero /= n
        return this;
        //Retornar o this significa que estou retornando a propria instância.
    }

    
    mul(n: number): this {
        this.numero *= n
        return this;
        //Retornar o this significa que estou retornando a propria instância.
    }

}

export class SubCalculadora extends Calculadora {
    pow(n: number): this {
        this.numero **= n;
        return this;
    }
}

const calculadora = new SubCalculadora(10);

calculadora.add(5).mul(2).div(2).sub(5).pow(2); //Usando o this como retorno, eu posso fazer chamadas em cadeia, como essa.
console.log(calculadora);


//Builder usamos quando precisamos inicializar um objeto muito grande, dessa forma, podemos inicializar o objeto por partes.
export class ResquestBuilder {
    private method: 'get' | 'post' | null;
    private url: string | null = null;

    setMethod(method: 'get' | 'post'): this {
        this.method = method;
        return this;
    }

    setUrl(url: string): this {
        this.url = url;
        return this;
    }

    send(): void {
        console.log(`Enviando dados via ${this.method} para ${this.url}` );
    }
}

const request = new ResquestBuilder();
request.setUrl('http://www.google.com').setMethod('post').send();