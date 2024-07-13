import React from 'react';
import { ContainerLogin, ContainerConteudoDeLogin,BodyStyle, Form } from './styled'
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { get } from 'lodash';
import Loading from '../../components/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import agenda from "../../img/agenda.svg";
import coolBackground from "../../img/cool-background.png";
import { Link } from 'react-router-dom';

export default function Login(props) {

    const dispatch = useDispatch();

    const prevPath = get(props, 'location.state.prevPath', '/');

    const isLoading = useSelector(state => state.auth.isLoading);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        let formErrors = false;

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('Email inválido');
        }

        if (password.length < 6 || password.length > 50) {
            formErrors = true;
            toast.error('Senha inválida');
        }

        if (formErrors) return;

        dispatch(actions.loginRequest({ email, password, prevPath }));
    };

    return (

        <BodyStyle>
            <div className="text-center d-flex justify-content-center">


                <Loading isLoading={isLoading} />


               

                <ContainerConteudoDeLogin style={{ backgroundImage: `url(${coolBackground})` }} className="col-md-6">
                <h1> CRUD de gerênciamento de alunos </h1>
                <img className="img-agenda" src={agenda}/>
                <br/>

                <Link to='/register'>
                <button> Cadastre-se </button>
                </Link>
                </ContainerConteudoDeLogin>

                <ContainerLogin className="col-md-6 d-flex justify-content-end">
                    
                    <div className="col-md-12">  
                    <h1> Login </h1>

                    <Form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='Seu e-mail'
                        />

                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder='Sua senha'
                        />

                        <button type="submit"> Acessar </button>
                    </Form>
                    </div>
                </ContainerLogin>



            </div>
        </BodyStyle>
    )
}