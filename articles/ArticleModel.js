const Sequelize = require("sequelize");
const connection = require("../database/connection");
const CategoryModel = require("../categories/CategoryModel");

const Article = connection.define("articles",{
    title:{
        type: Sequelize.STRING
    },
    slug:{
        type: Sequelize.STRING
    },
    body:{
        type: Sequelize.TEXT
    }
});

Article.belongsTo(CategoryModel); // Define que um artigo pertence a uma categoria (belongs to = pertece a)

module.exports = Article;