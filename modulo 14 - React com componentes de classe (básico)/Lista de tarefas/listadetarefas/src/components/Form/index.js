import React from 'react';
import PropTypes from '.prop-types';
import { FaPlus } from 'react-icons/fa';
import './form.css';

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
    return(
        <form onSubmit={handleSubmit} action="#" className="form">
        <input onChange={inputMudou}
            type="text"
            value={novaTarefa}
        />
        <button type="submit">
            <FaPlus />
        </button>

    </form>
    );
}

//Nós precisamos usar o propTypes para fazer uma validação nas props passadas no destructuring no parâmetro, então podemos colocar se o parâmetro é uma função ou se ele é requerido.
Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}