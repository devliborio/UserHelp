const Sequelize = require("sequelize");
const connection = require("../database/connection");

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

module.exports = Article;