exports.paginaInicial = (req, res) => {
   res.render('index', { //Eu posso mandar dados dentro desse objeto
        // titulo: 'Este será o titulo da pagina',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   });
   return;
} //Essa função de render esta renderizando o index.ejs que esta dentro da view

exports.trataPost = (req, res, next) => {
    res.send(req.body);
    return;
};