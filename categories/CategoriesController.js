const express = require("express");
const router = express.Router();
const CategoryModel = require("./CategoryModel")
const slugify = require("slugify");

router.get("/admin/categories/new", (req,res) => {
    res.render("admin/categories/new");
});

router.post("/categories/save",(req,res) => {
    var title = req.body.title; // Usando o body-parser para pegar input do formulario
    if(title != undefined){

        CategoryModel.create({ // Tratando dados do formulario para salvar no banco de dados
            title: title,
            slug: slugify(title) // Usando o slugify para transformar o titulo da categoria em um slug.
        }).then(() => {
            res.redirect("/");
        });

    } else {
        res.redirect("/admin/categories/new");
    }
});

module.exports = router;