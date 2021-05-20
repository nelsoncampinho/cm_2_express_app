require("dotenv").config();
const connection = require("../db/config");

module.exports = {
  async get_company_info(req, res) {
    const { firebaseKey } = req.body;
    try{
      await connection
      .query("Select * from company where company_key=:firebasekey", {
        replacements: { firebasekey:firebaseKey },
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
  async get_employee_info(req, res) {
    const { firebaseKey } = req.body;
    try{
      await connection
      .query("Select * from employee where employee_key=:firebasekey", {
        replacements: { firebasekey:firebaseKey },
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
}