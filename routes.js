const express = require("express");
const routes = express.Router();
const login = require("./src/controllers/login");

routes.post('/api/login',login.login)
routes.get('/',async function(req, res){
    return res.json("Welcome to API");
})

module.exports = routes;