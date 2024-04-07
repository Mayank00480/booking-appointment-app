const mysql = require('mysql2');

const pool = mysql.createPool({
    user : 'root',
    password : 'Mayank@123',
    database : 'booking',
    host : 'localhost'
});

module.exports = pool.promise();