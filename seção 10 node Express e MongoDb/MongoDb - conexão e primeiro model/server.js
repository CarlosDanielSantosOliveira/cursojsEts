require('dotenv').config();

const express = require('express');
const app = express();

//Conectando com a base de dados
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectei à base de dados.')
        app.emit('pronto') //Dessa forma, assim que a aplicação se conetar com o banco de dados, vai emitir uma mensagem de pronto
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
) //Precisamos usar isso para conseguir tratar os post feitos na aplicação.

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(routes);
app.use(middlewareGlobal);

app.on('pronto', () => { //Quando a conexão do banco de dados estiver pronta, vamos executar uma função
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
})

 