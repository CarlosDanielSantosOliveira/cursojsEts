import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from '.prop-types';

import './tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
    return(
        /* Aqui nós vamos codar em javascript dentro do ul para mapear as tarefas da lista a cada volta do for */
    <ul className="tarefas">
        {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
                {tarefa}
                <span>
                    <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
                    <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
                </span>
            </li> //Deixamos a propria tarefa como a chave do elemento
        ))}
    </ul>
    );
}

Tarefas.PropTypes = {
    tarefas: PropTypes.array.isRequired,
    handleEdit: PropTypes.function.isRequired,
    handleDelete: PropTypes.function.isRequired,
}