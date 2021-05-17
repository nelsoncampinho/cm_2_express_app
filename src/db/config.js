require('dotenv').config();
const Sequlize = require("sequelize");
const dbConfig = {
    dialect: 'postgres',
    dialectModule: require('pg'),
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: false,
}
const connection = new Sequlize(dbConfig);

module.exports = connection;