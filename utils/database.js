// utils/database.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // Ensure this is correct
  user: 'dbuser',     // Ensure this is correct
  password: 's3kreee7', // Ensure this is correct
  database: 'my_db'   // Ensure this is correct
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = connection;
