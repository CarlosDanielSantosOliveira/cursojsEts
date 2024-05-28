//Componente princípal da aplicação
//Ele vai possuir estado, logo, é uma classe
import React, { Component } from 'react';
import './Main.css';
import Form from './Form';
import Tarefas from './Tarefas';

//Nesta classe nós estamos criando estado pela primeira forma.
export default class Main extends Component {
    //Criando estado para o componente
    constructor(props) {
        super(props); //Assim eu chamo o construtor da classe que estou extendendo

        //Aqui é o atributo do nosso estado, ou seja, é o estado do nosso componente
        this.state = {
            //Inicializei o estado
            novaTarefa: '',
            tarefas: [],
            index: -1
        }

        this.inputMudou = this.inputMudou.bind(this);
    }

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));

        if(!tarefas) return;

        this.setState({tarefas});
    }

    //prevProps são as propriedade e prevState é o estado anterior dos valores
    componentDidUpdate(prevProps,prevState) {
        const { tarefas } = this.state;

        if (tarefas == prevState.tarefas) return;

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if (tarefas.indexOf(novaTarefa) != -1) return;

        const novasTarefas = [...tarefas];

        if (index == -1) {
            this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: '',
            });
        } else {
            novasTarefas[index] = novaTarefa;

            this.setState({
                tarefas: [...novasTarefas],
                index: -1,
                novaTarefa: '',
            })
        }

    }

    inputMudou(e) {
        //Esse método vai mudar o estado do atributo novaTarefa

        this.setState({
            novaTarefa: e.target.value, //Dessa forma nós vamos capturar os eventos dentro do input e atualizar o estado;
        });
    }

    handleEdit = (e, index) => {
        const { tarefas } = this.state;

        this.setState({
            index,
            novaTarefa: tarefas[index],
        });
    }

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefas],
        })
    }

    render() {

        const { novaTarefa, tarefas } = this.state;

        return (
            <div className='main'>
                <h1> Lista de tarefas </h1>
                <h1> {novaTarefa} </h1>

                <Form 
                    handleSubmit={this.handleSubmit}
                    inputMudou={this.inputMudou}
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