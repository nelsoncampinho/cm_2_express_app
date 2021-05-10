const express = require("express");
const routes = express.Router();


routes.get('/',(req,res) => {
    res.send("TESTE API")
})

routes.get('/tone',(req,res) => {
    res.send("Grande Tone")
})
routes.get('/nersu',(req,res) => {
    res.send("Grande Nersu")
})
routes.get('/default',(req,res) => {
    res.send("Grande Default")
})
routes.get('/exa',(req,res) => {
    res.send("Grande BIT")
})

module.exports = routes;