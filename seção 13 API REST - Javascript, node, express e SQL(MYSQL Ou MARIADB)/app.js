import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json()); //Estamos usando esse this, pois, vamos capturar json's de formulários
    }

    routes() {
        this.app.use('/', homeRoutes);
    }
}

export default new App().app; //Aqui estamos exportando o express