function adminAuth(req, res, next) { // Um middleware está entre a requisição e a resposta, e recebe geralmente três parametros, requisição, resposta e o next que serve pra da continuidade na requisição

    if (req.session.user != undefined) { // Caso a sessão esteja logada, permitir que ele acesse as rotas admin!
        next(); // Se você não chamar o 3 parametro a requisição vai ficar presa!

    } else { // Se ele não estiver logado ele vai pra homepage se tentar acessar a rota admin!
        res.redirect("/");
    }
}

module.exports = adminAuth