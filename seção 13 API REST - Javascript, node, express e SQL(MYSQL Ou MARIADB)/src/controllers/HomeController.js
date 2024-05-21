import Aluno from '../models/Aluno';

class HomeController {
    async index(req, res) {     
        res.json("Index");
    }
}

export default new HomeController(); //Dessa forma nós ja exportamos instanciado