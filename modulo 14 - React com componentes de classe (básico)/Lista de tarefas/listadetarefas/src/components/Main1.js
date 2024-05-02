//Componente princípal da aplicação
//Ele vai possuir estado, logo, é uma classe
import React, { Component } from 'react';
import './Main.css';
import {FaPlus} from 'react-icons/fa';

//Nesta classe nós estamos criando estado pela primeira forma.
export default class Main extends Component {
    //Criando estado para o componente
    constructor(props) {
        super(props); //Assim eu chamo o construtor da classe que estou extendendo

        //Aqui é o atributo do nosso estado, ou seja, é o estado do nosso componente
        this.state = {
            //Inicializei o estado
            novaTarefa: '',
        }

        this.inputMudou = this.inputMudou.bind(this);
    }

    inputMudou(e) {
        //Esse método vai mudar o estado do atributo novaTarefa

        this.setState({
            novaTarefa: e.target.value, //Dessa forma nós vamos capturar os eventos dentro do input e atualizar o estado;
        });
    }
    render() {

        const { novaTarefa } = this.state;

        return (
            <div className='main'>
                <h1> Lista de tarefas </h1>
                <h1> {novaTarefa} </h1>

                <form action="#" className="form"> 
                    <input onChange={this.inputMudou} 
                    type="text" 
                    value={novaTarefa}
                    /> 
                    <button type="submit">
                        <FaPlus />
                    </button>

                </form>
            </div>
        )
    }
}