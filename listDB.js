const path = require('path');

const filePath = path.join(__dirname, '/DBconnection.js')
//this object can be used to create new db connections 
const newConnection = require(filePath);

const conn = newConnection();

conn.query( `select * from Time `
            , (err,rows,fields) => {
                for (r of rows)
                    console.log(r);
            });

conn.query( `select * from Users `
            , (err,rows,fields) => {
                for (r of rows)
                    console.log(r);
            });
            


conn.end();