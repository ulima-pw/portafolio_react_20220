'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const files = require.context('./', false, /\.js$/i);
files.keys().forEach(key => {
  if(key.includes('index')){
    return
  }
  const model = files(key)(sequelize, Sequelize.DataTypes)
  db[model.name] = model;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
