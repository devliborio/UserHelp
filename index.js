const express = require("express");
const app = express();

// View engine
app.set("view engine", "ejs");

// Rotas
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, (erro) => {
    if (!erro) {
        console.log("O servidor está rodando!")
    } else {
        console.log(erro)
    }
});