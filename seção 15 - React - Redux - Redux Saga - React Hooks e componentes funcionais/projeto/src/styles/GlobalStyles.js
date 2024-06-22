import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';
import background from "../img/fundo.png";
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

   
    html, body, #root{
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
        height: 100%;
    }

    button {
        cursor: pointer;
        background: ${colors.primaryColor};
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700px;
        transition: all 30ms;
    }

    button:hover {
        filter: brightness(80%);
    }

    a {
        text-decoration: none;
        color: ${colors.primaryColor};
    }

    ul {
        list-style: none;
    }
    
`;

export const Container = styled.section`
    max-width: 360px;
    background: #fff;
    margin: 180px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;