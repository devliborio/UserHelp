// Express
const express = require("express");
const app = express();

// Session
const session = require("express-session");

//Connection with the database mysql
const connection = require("./database/connection");

// Reciving Controllers
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const usersController = require("./users/UsersController");

// Reciving Models
const ArticleModel = require("./articles/ArticleModel");
const CategoryModel = require("./categories/CategoryModel");

// View engine
app.set("view engine", "ejs");

// Static files
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

// Utilizing Express-session
app.use(session({
    secret: "aleatoriamentevamoscolocaralgoaleatorio", cookie: { maxAge: 10000000000}
}));

// Utilizing Routes of Controllers
app.use("/", categoriesController);
app.use("/", articlesController);
app.use("/", usersController);

// Home Route
app.get("/", (req, res) => {

    ArticleModel.findAll({
        order: [['id', 'DESC']], limit: 4 // Organizando os artigos de forma decrescente
    }).then((articles) => {

        CategoryModel.findAll().then((categories) => {
            res.render("index", { articles: articles, categories: categories });
        });
    });
});

app.get("/:slug", (req, res) => {
    var slug = req.params.slug;
    ArticleModel.findOne({
        where: {
            slug: slug
        }
    }).then((article) => {

        if (article != undefined) {
            CategoryModel.findAll().then((categories) => {
                res.render("admin/articles/article", { article: article, categories: categories });
            });

        } else {

            res.redirect("/");
        }
    }).catch((err) => {

        res.redirect("/");
    });
});

app.get("/category/:slug", (req, res) => {
    var slug = req.params.slug;
    CategoryModel.findOne({
        where: {
            slug: slug
        },
        include: [{ model: ArticleModel }] // join 
    }).then((category) => {
        if (category != undefined) {

            CategoryModel.findAll().then((categories) => {
                res.render("index", { articles: category.articles, categories: categories });
            });

        } else {
            res.redirect("/");
        }
    }).catch((err) => {
        res.redirect("/");
    });
});

app.listen(8080, (error) => {
    if (!error) {
        console.log("O servidor está rodando!")
    } else {
        console.log(error);
    }
});