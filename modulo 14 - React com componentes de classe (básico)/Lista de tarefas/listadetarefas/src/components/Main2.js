//Componente princípal da aplicação
//Ele vai possuir estado, logo, é uma classe
import React, { Component } from 'react';
import './Main.css';

//Nesta classe nós estamos criando estado pela segunda forma.
export default class Main extends Component {
    //Criando estado para o componente utilizando Clas Fields
    state = {
        novaTarefa: '',
    };
    

    handleChange = (e) => {
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

                <form action="#"> 
                    <input onChange={this.handleChange} type="text" /> 
                    <button type="submit"> Enviar </button>

                </form>
            </div>
        )
    }
}