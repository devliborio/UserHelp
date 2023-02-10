const express = require("express");
const router = express.Router();

// Importando bcryptjs
const bcrypt = require("bcryptjs");

// Receving Models
const UserModel = require("./UserModel")

// Routes type get()
router.get("/admin/users", (req, res) => {
    UserModel.findAll().then((users) => {
        res.render("admin/users/index", { users: users });

    });
});

router.get("/admin/users/create", (req, res) => {
    res.render("admin/users/new");
});

// Routes type post()
router.post("/users/create", (req, res) => { // Salvando dados do usuario no banco de dados (mysql)
    var email = req.body.email;
    var password = req.body.password;

    UserModel.findOne({ where: { email: email } }).then((user) => {

        if (user == undefined) { // Se não achar está permitido criar com o email solicitado

            // Etapa de segurança para armazenar a senha do usuario em conversão hash
            var salt = bcrypt.genSaltSync(10); // gerando incremento pro hash
            var hash = bcrypt.hashSync(password, salt); // ele vai retornar o hash pra variavel

            if (email && password != undefined) {
                UserModel.create({

                    email: email,
                    password: hash

                }).then(() => {
                    res.redirect("/");

                }).catch(err => {
                    console.log(err);

                });

            } else {
                res.send("Preencha todos os campos!")
            }


        } else { // Se achou algum email igual
            res.send("Email digitado já foi cadastrado, tente novamente")

        }
    });

    // res.json({ email, password }); // Testando pra conferir se está enviando os dados
});

module.exports = router;