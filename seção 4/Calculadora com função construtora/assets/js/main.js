function Calculadora() {

    //Vamos começar pegando o codigo html que esta utilizando a classe display
    this.display = document.querySelector('.display');

    //Método para iniciar a calculadora
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode !== 13) return;
            this.realizaConta();
        });
    };

    //Agora vamos criar um método para capturar os cliques dentro do display da calculadora
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if (element.classList.contains('btn-num')) this.addNumDisplay(element);
            if (element.classList.contains('btn-clear')) this.clear();
            if (element.classList.contains('btn-del')) this.del();
            if (element.classList.contains('btn-eq')) this.realizaConta();
        });
    };
    //Usamos o classList porque todos os número estão utilizando a mesma classe.
    //estamos validando, se existe uma lista de classes de btn-num, vamos adicionar um
    //número ao display, todos os números clicados são armazenados na variável element. E ela é chamada no método addNumDisplay

    //Como estamos enviando apenas o elemento nessa arrow function, não precisamos usar entre parenteses 
    this.addNumDisplay = element => {
        this.display.value += element.innerText;
        this.display.focus();
    }
    //O += serve para adicionar mais elementos ao texto

    this.clear = element => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida');
            return;
        }
    };

}

const calculadora = new Calculadora();
calculadora.inicia();

