import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    input {
        margin-bottom: 20px;
        height: 40px;
        padding: 0 10px;
        border-radius: 4px;
        border: 1px solid #ddd;
    }
`;

export const ContainerLogin = styled.div`
    max-width: 700px;
    background: black;
    padding: 200px;
    margin-top: 120px;
    color: #fff;
    border-radius: 0 5px 5px 0;
    box-shadow: 0 0 rgba(0, 0, 0, 0.1);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

export const ContainerConteudoDeLogin = styled.div`
    max-width: 700px;
    padding: 30px;
    margin-top: 120px;
    border-radius: 5px 0 0 5px;
    box-shadow: 0 0 10px rgba(0.1, 0, 0, 0.1);
   
    font-size: 40px;
    color: #FFF;
     
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background-color: #FFF;
    .img-agenda {
        margin-top: 50px;
        width: 60%;
    }

    button {
        cursor: pointer;
        background: ${colors.primaryColor};
        border: none;
        margin-top: 50px;
        color: #fff;
        padding: 10px 20px;
        border-radius: 4px;
        font-size: 30px;
        transition: all 30ms;
    }

`;

export const BodyStyle = styled.body`
    background-color: #FFF;
`;