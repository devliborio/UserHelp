const express = require("express");
const router = express.Router();
const CategoryModel = require("./CategoryModel")
const slugify = require("slugify");

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new");
});

// Routes type get()
router.get("/admin/categories", (req, res) => {
    CategoryModel.findAll().then((categories) => {
        res.render("admin/categories/index", { categories: categories });
    });
});

router.get("/admin/categories/edit/:id", (req, res) => {
    var id = req.params.id;

    if (isNaN(id)) {
        res.redirect("/admin/categories");
    }

    CategoryModel.findByPk(id)
        .then((categories) => { // Esse é um método especifico para pesquisar um item pelo ID dele
            if (categories != undefined) {
                res.render("admin/categories/edit", { categories: categories });
            } else {
                res.redirect("/admin/categories");
            }
        }).catch((erro) => {
            res.redirect("/admin/categories");
        });
});

// Routes type post()
router.post("/categories/save", (req, res) => {
    var title = req.body.title; // Usando o body-parser para pegar input do formulario
    if (title != undefined) {

        CategoryModel.create({ // Tratando dados do formulario para salvar no banco de dados
            title: title,
            slug: slugify(title) // Usando o slugify para transformar o titulo da categoria em um slug.
        }).then(() => {
            res.redirect("/")
        });

    } else {
        res.redirect("/admin/categories/new");
    }
});

router.post("/categories/delete", (req, res) => {
    var id = req.body.id; // Recebendo id do input
    if (id != undefined) {

        if (!isNaN(id)) { // Se for número

            CategoryModel.destroy({ // Destruindo id recebido pela variavel id
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/categories");
            });

        } else { // Se não for número
            res.redirect("/admin/categories");
        }

    } else {
        res.redirect("/admin/categories");
    }
});

router.post("/categories/update", (req, res) => { // Atualizando o titulo da categoria através do ID dela, usando o model criado pelo sequelize.
    var id = req.body.id;
    var title = req.body.title;

    CategoryModel.update({ title: title, slug: slugify(title) }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/categories");
    })
});

module.exports = router;