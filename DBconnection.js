const mysql = require('mysql');

function newConnection()
{
    let conn = mysql.createConnection({
        host:'34.134.27.235',
        user: 'user',
        password:'6474584026Ab...',
        database:'mysql-db-instance'
    });
    return conn;
}
module.exports = newConnection;
