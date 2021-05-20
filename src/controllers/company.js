require("dotenv").config();
const connection = require("../db/config");

module.exports = {
  async get_company_vehicle(req, res) {
    const { companyKey } = req.body;
    try{
      await connection
      .query("Select * from vehicle where company_key=:companyKey", {
        replacements: { companyKey:companyKey },
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