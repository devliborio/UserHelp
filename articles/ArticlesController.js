const express = require("express");
const router = express.Router();
const CategoryModel = require("../categories/CategoryModel");

router.get("/admin/articles/new", (req, res) => {
    CategoryModel.findAll().then((categories) => {
        res.render("admin/articles/new", {categories: categories});
    });
});

module.exports = router;