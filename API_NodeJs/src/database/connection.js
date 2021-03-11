const Knex = require('knex');
const dbConfig = require('./config');
const {Model} = require('objection');

function connection (){
  Model.knex(Knex(dbConfig.development));
}

module.exports = connection;
