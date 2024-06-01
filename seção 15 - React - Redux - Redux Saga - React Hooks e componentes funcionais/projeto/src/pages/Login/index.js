import React from 'react';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

import axios from '../../services/axios';
export default function Login() {

    React.useEffect(() => {
        async function getDate() {
            const response = await axios.get('/alunos');
            console.log(response);
        }

        getDate();
    }, []);    

    return (
        <>
        <Container>
            <Title>
                Login
                <small> Oie </small>
            </Title>
            <p> Lorem ipsum dolor sit amet</p>
            <button type="button"> Enviar </button>
        </Container>
        </>
    )
}