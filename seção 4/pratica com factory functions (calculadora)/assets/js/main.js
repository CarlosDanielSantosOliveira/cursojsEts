function criaCalculadora() {

    return {
        //Atributos
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        //Métodos
        inicia() {
            this.cliqueBotoes();
            this.pressionaBackSpace();
            this.pressionaEnter();
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 8) {
                e.preventDefault();
                this.clearDisplay();
              }
            });
          },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); 
        }, //Estamos pegando um número (que esta no indice 0) e apagando ele com o -1
        
        clearDisplay() {
            this.display.value = '';
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target; //Esse target serve para que, tudo o que clicarmos no site, vai disparar no console do devTools
                //O addEventListener, quer dizer que estamos adicionando um evento

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                } //Se o botao clicado for o botão clear, iremos chamar o método de clearDisplay

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();