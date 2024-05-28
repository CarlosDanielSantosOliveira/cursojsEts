import { Router } from 'express'; //Estamos improtante esse router do express, para que possamos trabalhar com as chamadas da api
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.store);

export default router;
