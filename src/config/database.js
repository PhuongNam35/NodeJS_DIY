require('dotenv').config();
const mysql = require('mysql2/promise');

//create connection to database
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT, //default: 3306
//   user: process.env.DB_USER, //default: empty
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, //default: empty
  database: process.env.DB_NAME,
  port: process.env.DB_PORT, //default: 3306
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connection;