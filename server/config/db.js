const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "contraleanpass",
    database: "frenchblog"
})

module.exports = db