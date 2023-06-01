require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
};
// dialect: 'mysql',
//   user: "jaydeepa",
//   password: "6M8tcWhCoJJAptz66e92W0Z9rs",
//   database: "jaydeepa",
//   host: "15.206.7.200",
//   port: 3310,