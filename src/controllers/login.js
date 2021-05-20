require("dotenv").config();
const connection = require("../db/config");

module.exports = {
  async login(req, res) {
    const { firebaseKey } = "dAGS0TudqXY02VpZske94Puynlt2";
    const isEmployee=false;
    const isCompany=false;
    //vai a tabela employee ver se existe
    //Caso nao exista vai a tabela company
    try{
      await connection
      .query("Select * from employee where employee_key=:firebasekey", {
        replacements: { firebasekey:firebaseKey },
      })
      .then(async(results) => {
        if(results[0].length>0){
          const userid = results[0][0].employee_key;
          console.log(userid)
          const companyid = results[0][0].company_key;
          return res.json({'status':true,'userid':userid,'companyid':companyid})
        }else{
          await connection
          .query("Select * from company where company_key=:firebasekey", {
            replacements: { firebasekey:firebaseKey },
          })
          .then((results) => {
            if(results[0].length>0){
                const companyid = results[0][0].company_key;
                return res.json({'status':true,'userid':'','companyid':companyid})
            }else{
              return res.json({'status':false,'userid':'','companyid':''})
            }
          });
        }
      });
    }catch(error){
      console.log(error)
      return res.json({'status':false,'userid':'','companyid':''})
    }
  },
};