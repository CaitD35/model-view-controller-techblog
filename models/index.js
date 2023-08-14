const Sequelize = require('sequelize');
const config = require('../config/config.json');
const {User} = require('../models');

const db = {};

const sequelize = new Sequelize(config.development);  // Using development config for now

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.js')(sequelize, Sequelize);  // Adjust the path if your user model file has a different name or path

// Add similar lines for other models if you have them
// db.someModel = require('./someModel.js')(sequelize, Sequelize);

// If you have associations, set them up here. For example:
// db.user.hasMany(db.someModel);

module.exports = db;
