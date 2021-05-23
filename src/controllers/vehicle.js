require("dotenv").config();
const connection = require("../db/config");

module.exports = {
  async get_vehicle_info(req, res) {
    const { plate } = req.body;
    try{
      await connection
      .query("Select * from vehicle where license_plate=:plate", {
        replacements: { plate:plate },
      })
      .then(async(results) => {
        if(results[0].length>0){
          return res.json(results[0][0])
         }
      });
    }catch(error){
      console.log(error)
      return res.json("Erro interno");
    }
  },
  async get_vehicle_trips(req, res) {
    const { plate } = req.body;
    try{
      await connection
      .query("Select * from trip where license_plate=:plate", {
        replacements: { plate:plate },
      })
      .then(async(results) => {
        if(results[0].length>0){
          return res.json(results[0])
         }
      });
    }catch(error){
      console.log(error)
      return res.json("Erro interno");
    }
  },
  async get_vehicle_actions(req, res) {
    const { plate } = req.body;
    console.log(plate)
    try{
      await connection
      .query("Select * from actions where license_plate=:plate", {
        replacements: { plate:plate },
      })
      .then(async(results) => {
        if(results[0].length>0){
          return res.json(results[0])
         }
      });
    }catch(error){
      console.log(error)
      return res.json("Erro interno");
    }
  },
}