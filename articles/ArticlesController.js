const express = require("express");
const router = express.Router();
const CategoryModel = require("../categories/CategoryModel");
const ArticleModel = require("./ArticleModel");
const slugify = require("slugify");
const adminAuth = require("../middlewares/adminAuth");


// Routes type get()
router.get("/admin/articles", (req, res) => {
    ArticleModel.findAll({
        include: [{ model: CategoryModel }]
    }).then((articles) => {
        res.render("admin/articles/index", { articles: articles });
    });
});

router.get("/admin/articles/new", (req, res) => {
    CategoryModel.findAll().then((categories) => {
        res.render("admin/articles/new", { categories: categories });
    });
});

router.get("/admin/articles/edit/:id", (req, res) => {
    var id = req.params.id;
    var title = req.body.title;
    var body = req.body.body;

    ArticleModel.findByPk(id).then((article) => {
        if (article != undefined) {
            CategoryModel.findAll().then((categories) => {
                res.render("admin/articles/edit", { article: article, categories: categories });
            });

        } else {
            res.redirect("/admin/articles");

        }
    }).catch((erro) => {
        res.redirect("/admin/articles");

    });
});

// Routes type post()
router.post("/articles/save", (req, res) => {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    ArticleModel.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect("/admin/articles");
    });
});

router.post("/articles/delete", (req, res) => {
    var id = req.body.id; // Recebendo id do input
    if (id != undefined) {

        if (!isNaN(id)) { // Se for número

            ArticleModel.destroy({ // Destruindo id recebido pela variavel id
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/articles");
            });

        } else { // Se não for número
            res.redirect("/admin/articles");
        }

    } else { // Se for indefinido (NULL)
        res.redirect("/admin/articles");
    }
});

router.post("/articles/update", (req, res) => {
    var id = req.body.id;
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    ArticleModel.update({ title: title, body: body, categoryId: category, slug: slugify(title) }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/articles")
    }).catch((Error) => {
        res.send(Error);
    });
});

// Sistema de paginação do projeto
router.get("/articles/page/:num", (req, res) => {
    var page = req.params.num;
    var offset = 0;

    if (isNaN(page) || page == 1) {
        offset = 0
    } else {
        offset = (parseInt(page) - 1) * 4;
    }   

    ArticleModel.findAndCountAll({
        limit: 4,
        offset: offset,
        order: [['id', 'DESC']]
    }).then((articles) => {

        var next;
        if(offset + 4 >= articles.count) {
            next = false;
        } else {
            next = true;
        }

        var result = {
            page: parseInt(page),
            next: next,
            articles: articles
        }


        CategoryModel.findAll().then((categories) => { 
            res.render("admin/articles/page", {result: result, categories: categories});
        });          
    });
});

module.exports = router;