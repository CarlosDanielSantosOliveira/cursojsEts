import styled from 'styled-components';
import { colorNav, primaryColor } from '../../config/colors';

export const Nav = styled.nav`
    background: ${colorNav};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        color: #fff;
        margin: 0 10px 0 0;
        font-weight: bold;
    }
`;
