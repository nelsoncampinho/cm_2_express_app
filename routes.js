const express = require("express");
const routes = express.Router();
const login = require("./src/controllers/login");
const users = require("./src/controllers/users");
const company = require("./src/controllers/company")
const external = require("./src/controllers/external")
const vehicle = require("./src/controllers/vehicle")
routes.post('/api/users/login',login.login)

routes.post('/api/employee/info',users.get_employee_info)
routes.post('/api/employee/trips',users.get_employee_trips)

routes.post('/api/company/info',users.get_company_info)
routes.post('/api/company/vehicle',company.get_company_vehicle)
routes.post('/api/company/employees',company.get_company_employees)

routes.post('/api/vehicle/get_info',vehicle.get_vehicle_info)
routes.post('/api/vehicle/get_trips',vehicle.get_vehicle_trips)
routes.post('/api/vehicle/get_actions',vehicle.get_vehicle_actions)

routes.post('/api/external/vehicle-by-plate',external.get_vehicle_by_plate)

routes.get('/',async function(req, res){
    return res.json("Welcome to API");
})

module.exports = routes;