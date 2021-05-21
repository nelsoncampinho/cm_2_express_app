require("dotenv").config();
const express = require("express");
var pg = require('pg')
const routes = require('./routes');
const app = express();
var multer = require('multer');
var upload = multer();
const port = 5000;

app.use(express.json());
//Adiciona as rotas

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.use(routes);

app.listen(port);
console.log("Server listening on port: " + port);
