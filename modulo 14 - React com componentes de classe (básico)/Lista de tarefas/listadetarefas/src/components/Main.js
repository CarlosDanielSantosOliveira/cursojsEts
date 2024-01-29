//componente principal da aplicação
//Esse componente tem que ter estado e vai ser uma classe
//Esse é um componente stateFull, que é feito de classe.

import React, { Component } from 'react';
import Form from './Form';
import Tarefas from './Tarefas';
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
            tarefas: [],
            index: -1
        };

        this.handleChange = this.handleChange.bind(this); //Estou falando que dentro deste método, o this é a classe
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

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));

        if (!tarefas) return;

        this.setState({ tarefas });
    }

    componentDidUpdate(prevProps, prevState) {
        const { tarefas } = this.state;

        if (tarefas === prevState.tarefas) return;

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim(); //O trim serve para eliminar os espaços do fim da frase

        if (tarefas.indexOf(novaTarefa) != -1) return;

        const novasTarefas = [...tarefas]; //Estamos trazendo as tarefas para essa variável, pois não podemos editar um estado diretamente.

        if (index === -1) {
            this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: '',
            });
        } else {
            const novasTarefas = [...tarefas];
            novasTarefas[index] = novaTarefa;

            this.setState({
                tarefas: [...novasTarefas],
                index: -1,
            })
        }
    }

    handleChange(e) {
        this.setState({
            novaTarefa: e.target.value
        });
    }

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefas],
        });
    }

    handleEdit = (e, index) => {
        const { tarefas } = this.state;

        this.setState({
            index,
            novaTarefa: tarefas[index]
        })
    }

    render() {

        const { novaTarefa, tarefas } = this.state;

        return (
            <div className='main'>
                <h1> Lista de tarefas </h1>

                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaTarefa={novaTarefa}
                />

                <Tarefas 
                    tarefas={tarefas} 
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                />

            </div>
        )
    }
}