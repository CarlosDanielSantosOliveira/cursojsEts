import styled from 'styled-components';

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
    max-width: 500px;
    background: #fff;
    padding: 30px;
    margin-top: 200px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const BodyStyle = styled.body`
    background-image: linear-gradient(to right bottom, #8671c6, #857ccb, #8587cf, #8691d3, #8a9bd5, #8b9ad1, #8b98ce, #8c97ca, #898bbf, #867eb4, #8372a8, #81659b);
`;