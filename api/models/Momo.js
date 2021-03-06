/**
 * Momo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName:"momos",

  attributes: {
      name : {type:'string'}, 
      dateDeNaissance : {type: 'string', columnType: 'date'}
  },

};

