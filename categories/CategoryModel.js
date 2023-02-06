const Sequelize = require("sequelize");
const connection = require("../database/connection");

const Category = connection.define("categories",{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Category.sync({force: true}); // Isso vai forçar a criação da tabela articles toda vez que o servidor for iniciado.

module.exports = Category;