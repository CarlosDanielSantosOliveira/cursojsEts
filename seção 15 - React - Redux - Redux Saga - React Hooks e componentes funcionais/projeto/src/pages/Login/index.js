import React from 'react';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
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