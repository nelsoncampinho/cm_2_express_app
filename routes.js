const express = require("express");
const routes = express.Router();
const login = require("./src/controllers/login");
const users = require("./src/controllers/users");

routes.post('/api/login',login.login)
routes.post('/api/employee-info',users.get_employee_info)
routes.post('/api/company-info',users.get_company_info)
routes.get('/',async function(req, res){
    return res.json("Welcome to API");
})

module.exports = routes;