require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//config routes
app.use('/', webRoutes);

//create connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307, //default: 3306
  user: 'root', //default: empty
  password: '123456',
  database: 'hoidanit'
});

connection.query(
  'SELECT * from Users',
  function (err, results, fields) {
    console.log(">>>result = ", results); // results contains rows returned by server
    console.log(">>>field = ", fields); // fields contains extra meta data about results, if available
  }
);


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
})