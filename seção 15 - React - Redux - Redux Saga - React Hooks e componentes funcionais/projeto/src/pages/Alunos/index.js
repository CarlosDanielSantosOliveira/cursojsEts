import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
 import axios from '../../services/axios';
import { Link } from 'react-router-dom';
import { AlunoContainer, ProfilePicture, NovoAluno } from './styled';
 
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';


export default function Alunos() {
    const [alunos, setAlunos] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    React.useEffect(() => {
        async function getData() {
            setIsloading(true);
            const response = await axios.get('/alunos');
            setAlunos(response.data);
            setIsloading(false);
        }

        getData();
    }, []);

    const handleDeleteAsk = e => {
        e.preventDefault();
        const exclamation = e.currentTarget.nextSibling;
        exclamation.setAttribute('display', 'block');
        e.currentTarget.remove();
    }

    const handleDelete = async(e, id, index) => {
        e.persist();
        try {
            setIsloading(true);
            await axios.delete(`/alunos/${id}`);
            const novosAlunos = [...alunos];
            novosAlunos.splice(index, 1);
            setAlunos(novosAlunos);
            setIsloading(false);
         } catch(err) {
            const status = get(err, 'response.status', 0);

            if (status == 401) {
                toast.error("Você precisa fazer login.");
                setIsloading(false);
            } else {
                toast.error("Ocorreu um erro ao excluir aluno.");
                setIsloading(false);
            }
        }
    }

    return (

        <Container>
            <Loading isLoading={isLoading} />
            <h1> Alunos </h1>

            <NovoAluno to="/aluno/"> Novo Aluno </NovoAluno>
            
            <AlunoContainer>
                {alunos.map((aluno, index) => (

                    <div key={String(aluno.id)}>
                        <ProfilePicture> 
                        {get(aluno, 'Fotos[0].url', false) ? ( <img crossOrigin="anonymous" src={aluno.Fotos[0].url} alt='' />) : (<FaUserCircle size={36} />)}
                        </ProfilePicture>

                        <span>{aluno.nome}</span>
                        <span>{aluno.email}</span>

                        <Link to={`/aluno/${aluno.id}/edit`}> <FaEdit size={16} /> </Link>

                        <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}> <FaWindowClose size={16} /> </Link>

                        <FaExclamation 
                            size={16} 
                            display="none" 
                            cursor="pointer" 
                            onClick={e => handleDelete(e, aluno.id, index)}
                            />
                             
                     </div>
                ))}
            </AlunoContainer>
        </Container>

    )
}