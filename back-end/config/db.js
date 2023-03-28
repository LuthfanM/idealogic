// module.exports = {
//     host: 'localhost',
//     user: 'root',
//     password: 'luthfanm',
//     database: 'idealogic',
//     multipleStatements: true,
//     connectionLimit : 10,
// }

var mysql = require("mysql2");

var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "luthfanm",//if your sql have no password or different password, leave it blank or change this val
  database: "idealogic",
  multipleStatements: true,
  connectionLimit: 10,
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Database connected successfully");
  connection.release();
});

module.exports = pool;
