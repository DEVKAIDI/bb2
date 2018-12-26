/**
 * MomoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    create : (req,res)=>{
        Momo.create({name:req.param("name")}).then( function(userCreated){
                 sails.log.info(userCreated);
                  res.ok(userCreated.name);
       }, function(Error){
        res.serverError({err:'Unable to create user'});
       });
    },

    hola:(req,res)=>{
            res.ok("Hola : momo");
    }
};