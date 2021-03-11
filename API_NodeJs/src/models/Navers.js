const {Model} = require('objection');

class Navers extends Model{

  static get tableName(){
    return 'navers';
  }

  static get idColumn(){
    return 'id';
  }

  static get relationMappings(){
    return {
      projects: {
        relation: Model.ManyToManyRelation,
        modelClass: require('./Projects'),
        join: {
          from: 'navers.id',
          through: {
            from: 'projects_navers.naver_id',
            to: 'projects_navers.project_id'
          },
          to: 'projects.id'
        }
      }
    }
  }
}

module.exports = Navers;
