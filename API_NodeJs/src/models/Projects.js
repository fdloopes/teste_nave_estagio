const {Model} = require('objection');

class Projects extends Model{

  static get tableName(){
    return 'projects';
  }

  static get idColumn(){
    return 'id';
  }

  static get relationMappings(){
    return {
      navers: {
        relation: Model.ManyToManyRelation,
        modelClass: require('./Navers'),
        join: {
          from: 'projects.id',
          through: {
            from: 'projects_navers.project_id',
            to: 'projects_navers.naver_id'
          },
          to: 'navers.id'
        }
      }
    }
  }
}

module.exports = Projects;
