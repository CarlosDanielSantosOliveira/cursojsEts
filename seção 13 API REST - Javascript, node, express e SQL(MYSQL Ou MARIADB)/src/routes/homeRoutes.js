import { Router } from 'express'; //Estamos improtante esse router do express, para que possamos trabalhar com as chamadas da api
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;
