const {Model} = require('objection');

class Projects_Navers extends Model{

  static get tableName(){
    return 'projects_navers';
  }

  static get idColumn(){
    return 'id';
  }
}

module.exports = Projects_Navers;
