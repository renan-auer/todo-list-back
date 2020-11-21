const Sequelize = require('sequelize');
const sequelize = new Sequelize('db-teste', 'root', '', 
    {dialect: 'mysql', host: 'localhost'});
 
module.exports = sequelize;