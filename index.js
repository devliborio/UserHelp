const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/connection");

// View engine
app.set("view engine", "ejs");

// Static
app.use(express.static("public"));

// Body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

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