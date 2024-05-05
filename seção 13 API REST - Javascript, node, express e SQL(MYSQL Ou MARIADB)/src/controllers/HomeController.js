class HomeController {
    index(req, res) {
        res.json({
            tudoCerto: true,
        });
    }
}

export default new HomeController(); //Dessa forma nós ja exportamos instanciado