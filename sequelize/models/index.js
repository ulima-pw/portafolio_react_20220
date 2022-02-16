'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
//const basename = path.basename(__filename);
const basename = "index.js";
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


const models = process.cwd() + '/sequelize/models/' || __dirname;

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

/*fs
  .readdirSync(models)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    file = file.substring(0, file.length - 3)
    console.log("file:", file)
    const model = require(path.join(models, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }); */
  
const model = require("../models/proyecto")

db[model(sequelize, Sequelize.DataTypes).name] = model(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;