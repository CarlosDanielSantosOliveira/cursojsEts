//componente principal da aplicação
//Esse componente tem que ter estado e vai ser uma classe
//Esse é um componente stateFull, que é feito de classe.

import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

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
            tarefas: []
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

    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim(); //O trim serve para eliminar os espaços do fim da frase

        if(tarefas.indexOf(novaTarefa) != -1) return;

        const novasTarefas = [...tarefas]; //Estamos trazendo as tarefas para essa variável, pois não podemos editar um estado diretamente.

        this.setState({
            tarefas: [...novasTarefas, novaTarefa]
        });
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
        console.log('Delete', index);
    }



    render() {

        const { novaTarefa, tarefas } = this.state;

        return (
            <div className='main'>
                <h1> Lista de tarefas </h1>

                <form onSubmit={this.handleSubmit} action="#" className="form"> 
                    <input onChange={this.handleChange} type="text" value={novaTarefa}/>
                    <button type="submit"> 
                        <FaPlus />
                    </button>
                </form>

                <ul className='tarefas'>
                    {tarefas.map((tarefa, index) => (
                        <li key={tarefa}> {tarefa} 
                        <span>
                            <FaEdit  onClick={(e) => this.handleEdit(e, index)} className='edit'/>
                            <FaWindowClose  onClick={(e) => this.handleDelete(e, index)} className='delete'/>
                        </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}