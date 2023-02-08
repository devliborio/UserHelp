const express = require("express");
const router = express.Router();
const CategoryModel = require("../categories/CategoryModel");
const ArticleModel = require("./ArticleModel");
const slugify = require("slugify");


// Routes type get()
router.get("/admin/articles", (req, res) => {
    ArticleModel.findAll({
        include: [{model: CategoryModel}]
    }).then((articles) => {
        res.render("admin/articles/index", {articles: articles});
    });
});

router.get("/admin/articles/new", (req, res) => {
    CategoryModel.findAll().then((categories) => {
        res.render("admin/articles/new", { categories: categories });
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

module.exports = router;