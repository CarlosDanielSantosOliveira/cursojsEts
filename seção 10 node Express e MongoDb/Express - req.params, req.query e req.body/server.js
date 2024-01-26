const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
) //Precisamos usar isso para conseguir tratar os post feitos na aplicação.

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar<button>
    </form>
    `);
});

app.get('/teste/:idUsuarios?', (req, res) => { //o ponto de interrogação serve para dizer que o parâmetro é opcional
    console.log(req.params) //exibindo os parâmetros da requisição
    res.send(req.params.idUsuarios)
})

app.post('/', (req, res) => {
    console.log(req.body) //Para pegarmos o que esta sendo enviado no corpo da requisição
    res.send(`O que você me enviou foi: ${req.body.nome}`);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});