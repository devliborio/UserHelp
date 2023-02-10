const express = require("express");
const router = express.Router();

// Receving Models
const UserModel = require("./UserModel")

// Routes type get()
router.get("/admin/users", (req, res) => {
    res.send("");
});

router.get("/admin/users/create", (req, res) => {
    res.render("admin/users/new");
});

// Routes type post()
router.post("/users/create", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    // res.json({ email, password }); // Testando pra conferir se está enviando os dados
});

module.exports = router;