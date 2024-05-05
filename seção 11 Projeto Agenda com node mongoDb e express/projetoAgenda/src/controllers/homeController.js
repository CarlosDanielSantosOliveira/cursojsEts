const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
   const contatos = await Contato.buscaContato();
   
   res.render('index', { contatos });
} //Essa função de render esta renderizando o index.ejs que esta dentro da view

