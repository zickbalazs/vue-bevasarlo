const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('zb_bevasarlolista', "root", "", {
    host: 'localhost',
    dialect: 'mysql',
    logging:console.log
});
let Tasks = require('../models/taskModel')(sequelize, DataTypes);

module.exports = sequelize;