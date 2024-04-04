const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date,  default: Date.now },

});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

//usando função construtora no lugar de criar uma classe

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.prototype.register = async function () {
    this.valida();
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.create(this.body);
}

Contato.prototype.valida = function () {
    this.cleanUp();
    //Validação
    //O email precisa ser válido
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
    if(!this.body.email && !this.body.telefone) {
        this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
    }
}

Contato.prototype.cleanUp = function () {
    //Estou validando se houver algo dentro do body que não seja uma string, vou converter para uma string vazia.
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    //Vamos garantir que só temos os campos do form.
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        telefone: this.body.telefone,
        email: this.body.email,
    }
}

Contato.prototype.edit =  async function(id) {
    if(typeof id !== 'string') return;
    this.valida();
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });
}

//Métodos estáticos - aqueles que não vão para o prototype(Eles não acessam o this)
Contato.buscaPorId = async function(id) {
    if(typeof id !== 'string') return;
    const contato = await ContatoModel.findById(id);

    return contato;
}

Contato.buscaContato = async function(id) {
   const contatos = await ContatoModel.find().sort({ criadoEm: -1 }); //Esse objeto dentro do sort é para nós filtrarmos os contatos por ordem descrescente 
   return contatos;
}

Contato.delete = async function(id) {
    if(typeof id !== 'string') return;

    const contato = await ContatoModel.findOneAndDelete({_id: id});//Esse objeto dentro do sort é para nós filtrarmos os contatos por ordem descrescente 
    return contato;
 }

module.exports = Contato;
