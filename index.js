// Express
const express = require("express");
const app = express();

//Connection with the database mysql
const connection = require("./database/connection");

// Reciving Controllers
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

// Reciving Models
const ArticleModel = require("./articles/ArticleModel");
const CategoryMordel = require("./categories/CategoryModel");

// View engine
app.set("view engine", "ejs");

// Static iles
app.use(express.static("public"));

// Body parser
const bodyParser = require("body-parser");
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

// Utilizing Routes of Controllers
app.use("/",categoriesController);
app.use("/",articlesController);

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