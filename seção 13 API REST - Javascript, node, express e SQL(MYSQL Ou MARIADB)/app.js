import dotenv from 'dotenv';
import express from 'express';
import './src/database';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/AlunoRoutes';
import fotoRoutes from './src/routes/fotoRoutes';
import { resolve } from 'path';

dotenv.config();

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json()); //Estamos usando esse this, pois, vamos capturar json's de formulários
        this.app.use(express.static(resolve(__dirname, 'uploads'))); //Estamos usando esse this, pois, vamos capturar json's de formulários
    }

    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/users/', userRoutes);
        this.app.use('/tokens/', tokenRoutes);
        this.app.use('/alunos/', alunoRoutes);
        this.app.use('/fotos/', fotoRoutes);
    }
}

export default new App().app; //Aqui estamos exportando o express