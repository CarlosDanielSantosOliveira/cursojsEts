const Login = require('../models/loginModel');

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logado');
    return res.render('login');
}

exports.register = async (req, res) => {
    try {
        //Instânciando a classe 
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                //Dessa forma nós salvamos a sessão (ou seja, quando o usuario preenche os campos e clica no botão de salvar para ser redirecionado para alguma página)
                return res.redirect('back');
                //e com o back nós voltamos para a tela que ele estava ao clicar no botão entrar ou criar minha conta;
            });

            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(function() {
            return res.redirect('back');
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();
    
        if(login.errors.length > 0) {
          req.flash('errors', login.errors);
          req.session.save(function() {
            return res.redirect('back');
          });
          return;
        }
        req.flash('success', 'Você entrou no sistema.');
        req.session.user = login.user;
        req.session.save(function() {
            return res.redirect('back');
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    };
};

exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect('/');
}