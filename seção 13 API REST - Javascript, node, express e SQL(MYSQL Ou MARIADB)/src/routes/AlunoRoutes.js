import { Router } from 'express'; //Estamos improtante esse router do express, para que possamos trabalhar com as chamadas da api
import alunoController from '../controllers/AlunoController';

const router = new Router();

router.get('/', alunoController.index);

export default router;
