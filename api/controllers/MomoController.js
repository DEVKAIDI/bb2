/**
 * MomoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    
    create : async (req,res)=>{

      let userCreated = await Momo.create({name:req.param("name"), dateDeNaissance:new Date()}).fetch();
      return res.json(userCreated);
    },

    hola:(req,res)=>{
            res.ok("Hola : momo");
    }
};