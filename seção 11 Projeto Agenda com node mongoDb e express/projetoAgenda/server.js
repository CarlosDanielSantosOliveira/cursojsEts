require('dotenv').config();

const express = require('express');
const app = express();

//Conectando com a base de dados
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log('Conectei à base de dados.')
        app.emit('pronto') //Dessa forma, assim que a aplicação se conetar com o banco de dados, vai emitir uma mensagem de pronto
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
// const helmet = require('helmet');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

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
// app.use(helmet());
const csrf = require('csurf');
const sessionOptions = session({
    secret: 'sessão salva',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),    
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});