const express = require("express");
const router = express.Router();
const CategoryModel = require("../categories/CategoryModel");
const AricleModel = require("./ArticleModel");
const slugify = require("slugify");

router.get("/admin/articles/new", (req, res) => {
    CategoryModel.findAll().then((categories) => {
        res.render("admin/articles/new", {categories: categories});
    });
});

module.exports = router;