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

app.post('/login', (req, res) => {
  let userName = req.body.usr;
  let password = req.body.pwd;
  let message = "Access denied";

  if (userName == 'admin' && password == '123') {
    message = "Welcome";
  }

  req.send(message)
})

app.use(express.static('frontend'))

// make the app listen to port 80 as specified in the project instructions
// part 6 of the development section adresses this 
app.listen(80);