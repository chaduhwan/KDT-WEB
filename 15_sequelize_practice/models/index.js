'use strict';
const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password,config);

db.user = require('./user')(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
