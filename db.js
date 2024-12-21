const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost", // Replace with your DB host
  user: "root",      // Replace with your DB username
  password: "password", // Replace with your DB password
  database: "robin_service",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
