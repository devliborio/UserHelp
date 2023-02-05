const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/connection");

// Reciving Controllers
const categoriesController = require("./categories/CategoriesController");

// View engine
app.set("view engine", "ejs");

// Static
app.use(express.static("public"));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feito com o banco de dados!");
    }).catch((error) => {
        console.log(error);
    });

// Utilizing Routes of categoriesController
app.use("/",categoriesController);

// Home Route
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, (error) => {
    if (!error) {
        console.log("O servidor está rodando!")
    } else {
        console.log(error);
    }
});