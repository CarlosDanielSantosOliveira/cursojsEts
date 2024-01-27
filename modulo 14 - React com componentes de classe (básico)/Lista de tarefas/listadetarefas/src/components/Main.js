//componente principal da aplicação
//Esse componente tem que ter estado e vai ser uma classe
//Esse é um componente stateFull, que é feito de classe.

import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
    //Criando estado:
    //Sempre que eu tenho um constructor dentro de uma classe que herda de outra classe, utilizamos o super para chamar o construtor da classe que estou herdando
    constructor(props) {
        super(props)

        //Nós criamos esse construtor apenas para termos a nossa variavel de estado
        this.state = {
            //Inicializando um state
            novaTarefa: '',
        }

        this.inputMudou = this.inputMudou.bind(this); //Estou falando que dentro deste método, o this é a classe
    }

    /*
        Uma outra forma de manipular state, caso não haja um constructor é a seguinte:
        vamos utilizar uma tecnica chamada class fields:

        state = {
            novaTarefa: '',
        }

        inputMudou = (e) => {
            this.setState({
                novaTarefa: e.target.value,
            })
        }
    */

    handleChange(e) {
        this.setState({
            novaTarefa: e.target.value
        });
    }

    render() {

        const { novaTarefa } = this.state;

        return (
            <div className='main'>
                <h1> Lista de tarefas </h1>

                <form action="#"> 
                    <input onChange={this.handleChange} type="text" />
                    <button type="submit"> Enviar </button>
                </form>
            </div>
        )
    }
}