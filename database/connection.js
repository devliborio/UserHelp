const Sequelize = require("sequelize")

const connection = new Sequelize("userhelp","root","@root@",{
    host: "localhost",
    dialect: "mysql"
}); 

module.exports = connection;