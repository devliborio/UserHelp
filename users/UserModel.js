const Sequelize = require("sequelize");
const connection =  require("../database/connection");

const User = connection.define("users", {
    email:{
        type: Sequelize.STRING ,
        allowNull: false
    },

    password:{
        type: Sequelize.STRING ,
        allowNull: false
    }
});

// User.sync({force: true}); //Isso vai forçar a criação da tabela articles toda vez que o servidor for iniciado.

module.exports = User