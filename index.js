const express = require('express');
const path = require('path');

//this object can be used to create new db connections 
const newConnection = require('./DBConnection');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('/frontend/index.html', { root: __dirname })
  })

app.use(express.urlencoded({
  extended: true
}))

app.get('/guest', (req, res) => {
  res.sendFile('/frontend/guest.html', { root: __dirname })
})

app.get('/admin', (req, res) => {
  res.sendFile('/frontend/admin.html', { root: __dirname })
})

app.post('/login', (req, res) => {
  let userName = req.body.usr;
  let password = req.body.pwd;
  let message = "Access denied";

  if (userName == 'admin' && password == '123') {
    message = "Welcome";
    res.sendFile('/frontend/admin.html', { root: __dirname })
  }

  res.send(message)
})

app.get('/login', (req, res) => {
  let userName = req.body.usr;
  let password = req.body.pwd;
  let message = "Access denied";

  if (userName == 'admin' && password == '123') {
    message = "Welcome";
    res.sendFile('/frontend/admin.html', { root: __dirname })
  }

  res.send(message)
})

app.get('/add-user', (req,res) => {
  let conn = newConnection();
  conn.connect();
  console.log("hmmmmmmm");
  conn.query(`insert into Users values ('${req.query.name}',${req.query.value},${req.query.value},${req.query.value},${req.query.value},${req.query.value},${req.query.value},${req.query.value},${req.query.value},${req.query.value},${req.query.value})`
          ,(err,rows,fields) => {
              res.redirect('/');        
          } );

  conn.end();
})

app.get('/add-times', (req,res) => {
  let conn = newConnection();
  conn.connect();
  console.log("hmmmmmmm");
  conn.query(`UPDATE Time SET T1 = ${req.query.name}, T2 = ${req.query.name}, T3 = ${req.query.name}, T4 = ${req.query.name}, T5 = ${req.query.name}, T6 = ${req.query.name}, T7 = ${req.query.name}, T8 = ${req.query.name}, T9 = ${req.query.name}, T10 = ${req.query.name},)`
          ,(err,rows,fields) => {
              res.redirect('/');        
          } );

  conn.end();
  console.log('connection ended');
})

app.use(express.static('frontend'))

// make the app listen to port 80 as specified in the project instructions
// part 6 of the development section adresses this 
app.listen(80);