exports.middlewareGlobal = (req, res, next) => {

    if(req.body.nome) {
        console.log(`Vi que voce postou ${req.body.nome}`);
    }

    console.log("Passei no middleware global.");
    next();
};