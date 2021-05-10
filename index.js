const express = require("express");
const routes = require('./routes');
const app = express();
const port = 5000;

app.use(express.json());
//Adiciona as rotas
app.use(routes);

app.listen(port);
console.log("Server listening on port: " + port);
