/**
 * MomoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create : (req,res)=>{
       Momo.create({name:req.param("name")},()=>{
           res.ok("Ok");
       },()=>{
        res.serverError({err:'Unable to create user'});
       })
    },

    hola:(req,res)=>{
            res.ok("Hola : "+req.param("name"));
    }
};