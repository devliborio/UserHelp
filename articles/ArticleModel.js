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

// Relationship
CategoryModel.hasMany(Article); // Define que uma categoria tem muitos artigos (has many = tem muitos)
Article.belongsTo(CategoryModel); // Define que um artigo pertence a uma categoria (belongs to = pertece a)

// Article.sync({force: true}); // Isso vai forçar a criação da tabela articles toda vez que o servidor for iniciado.

module.exports = Article;