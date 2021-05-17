const express = require("express");
const routes = express.Router();
const analises = require("./src/controllers/teste");

routes.get('/api/teste',analises.getReviewById)
routes.get('/',async function(req, res){
    return res.json("Welcome to API");
})

module.exports = routes;