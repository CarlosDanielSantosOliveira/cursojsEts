import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { useDispatch } from 'react-redux';
 
export default function Login() {

    const dispatch = useDispatch();

    return (

        <Container>
            <h1> Login </h1>
        </Container>

    )
}