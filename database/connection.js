const Sequelize = require("sequelize")

const connection = new Sequelize("blog_crud_project","root","@root@",{
    host: "localhost",
    dialect: "mysql"
}); 

module.exports = connection;