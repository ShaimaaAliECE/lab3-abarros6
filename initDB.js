//this is where i will initialize the database

const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'34.134.27.235',
    user: 'root',
    password:'mypassword',
    database:'usersDB'
});

conn.connect();

//if there are tables in place already then reset them
conn.query(`Drop Table Time`,
                (err,rows,fields) => {
                    if (err)
                        console.log(err);
                    else
                        console.log('Table Dropped');
                }
            )

conn.query(`Drop Table Users`,
            (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('Table Dropped');
            }
        )


//init the time table with values that only the admin user can edit
conn.query(`CREATE TABLE Time
            (
                T1 int(2),
                T2 int(2),
                T3 int(2),
                T4 int(2),
                T5 int(2),
                T6 int(2),
                T7 int(2),
                T8 int(2),
                T9 int(2),
                T10 int(2)
            )
            ` 
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('Table Created');
            })

//the int data type is used to represent the true = 1 and false = 0
conn.query(`CREATE TABLE Users
            (
                Name varchar(100),
                T1 int(1),
                T2 int(1),
                T3 int(1),
                T4 int(1),
                T5 int(1),
                T6 int(1),
                T7 int(1),
                T8 int(1),
                T9 int(1),
                T10 int(1)
            )
            ` 
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('Table Created');
            })

conn.query( `insert into Time values (0,0,0,0,0,0,0,0,0,0)`
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('One row inserted');
            });

conn.query( `insert into Users values ('testName',1,1,1,1,1,1,1,1,1,1)`
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('One row inserted');
            });


conn.end();