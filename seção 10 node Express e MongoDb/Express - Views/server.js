const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
) //Precisamos usar isso para conseguir tratar os post feitos na aplicação.

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});