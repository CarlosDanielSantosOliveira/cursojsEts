import app from './app';

const port = 3001;
app.listen(port, () => { //Nesse listen estamos determinando a porta em que a api vai rodar
    console.log();
    console.log(`Escutando na porta ${port}`);
    console.log(`CTRL + Clique em http://localhost:${port}`);
});