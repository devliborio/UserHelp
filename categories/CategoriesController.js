const express = require("express");
const router = express.Router();
const CategoryModel = require("./CategoryModel")
const slugify = require("slugify");

router.get("/admin/categories/new", (req,res) => {
    res.render("admin/categories/new");
});

router.get("/categories/save",(req,res) => {
    var title = req.body.title;
    if(title != undefined){
        
    } else {
        res.redirect("/admin/categories/new");
    }
});

module.exports = router;