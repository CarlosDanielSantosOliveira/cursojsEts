import { Router } from 'express'; //Estamos improtante esse router do express, para que possamos trabalhar com as chamadas da api
import FotoController from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, FotoController.store);

export default router;
