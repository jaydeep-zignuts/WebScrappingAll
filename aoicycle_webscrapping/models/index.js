const dbConfig = require('../config/db.config.js');

const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    dialect: dbConfig.dialect,
    host: dbConfig.host,
    port: dbConfig.port,
  }
);
sequelize.authenticate().then(()=>{
  console.log("Connected to database");
}).catch(err=>{
  console.log("Error :: "+err);
});

const db = {};
db.sequelize = Sequelize;
db.sequelize = sequelize;
db.aoiCycle= require('./bikedetails.model.js')(sequelize,DataTypes);
db.sequelize.sync({ force : false}).then(()=>{
  console.log("Sync Success!!!");
});
module.exports = db ;
