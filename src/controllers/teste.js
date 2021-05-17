require("dotenv").config();
const connection = require("../db/config");

module.exports = {
  async getReviewById(req, res) {
    const { produtoid } = req.query;
    try{
      await connection
      .query("select * from trip", {
      })
      .then((results) => {
        return res.json(results);
      });
    }catch(error){
      return res.json("Erro interno");
    }
  },
};