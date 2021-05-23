require("dotenv").config();
const connection = require("../db/config");

module.exports = {
  async get_vehicle_by_plate(req, res) {
    const {plate } = req.body;
    var response
    response= {
        'plate':plate,
        'plate_date':'10/19',
        'brand':'Audi',
        'model':'R8',
        'average_consumption':8.9,
        'type':1,
        'fuel_type':1,
}
      return res.json(response);
    },
}