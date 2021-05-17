require("dotenv").config();
const connection = require("../db/config");

module.exports = {
  async getReviewById(req, res) {
    const { produtoid } = req.query;

    return res.json("db connection done");
    /*await connection
      .query("select * from company", {
        replacements: {
          produtoid: produtoid,
        },
      })
      .then((results) => {
        return res.json(pro);
      });*/
  },
};