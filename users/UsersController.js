const express = require("express");
const router = express.Router();

// Receving Models
const UserModel = require("./UserModel")

// Routes type get()
router.get("/admin/users", (req,res) => {
    res.send("");
});

router.get("/admin/users/create", (req,res) => {
    res.render("admin/users/new");
});

module.exports = router;