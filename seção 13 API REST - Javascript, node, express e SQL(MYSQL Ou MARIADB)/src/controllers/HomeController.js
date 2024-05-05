import Aluno from '../models/Aluno';

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: "Carlos",
            sobrenome: "Daniel",
            email: "carlos@gmail.com",
            idade: 23,
            peso: 102,
            altura: 1.7
        })
        res.json(novoAluno);
    }
}

export default new HomeController(); //Dessa forma nós ja exportamos instanciado