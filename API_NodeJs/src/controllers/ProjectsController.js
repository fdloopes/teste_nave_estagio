const Projects = require('../models/Projects');
const Projects_Navers = require('../models/Projects_Navers');

module.exports = {

    // Index -> Retorna um array com todos os projetos
    async index(req,res) {
        try {
          const projects = await Projects.query().select('id','name').orderBy('name');
          return res.json(projects);
        } catch(err){
          return res.status(500).json(err);
        }
    },

    // Show -> Retorna um objeto com detalhes de um projeto
    // e um array com os navers que participam dele
    async show(req,res) {
      try {
        const project = await Projects
        .query()
        .findById(req.params.id)
        .select('id','name')
        .withGraphFetched('navers')
        .modifyGraph('navers', builder => {
          builder.select('navers.id','navers.name','navers.birthdate','navers.admission_date','navers.job_role');
        });
        return res.json(project);
      } catch (err) {
        return res.status(500).json(err);
      }
    },

    // Store -> Cria um novo registro de projeto no banco
    // e associa ele aos navers que participam dele.
    // Retorna o objeto projeto criado
    async store(req,res){
      try {

        // Realiza o insert do project na tabela projects
        let project = await Projects.query().insert(req.body);

        // Verifica se o id foi retornado
        if(project.id == 0){
          project = await Projects.query()
          .select('id','name')
          .where('name','=',req.body.name)
          .orderBy('created_at','desc')
          .limit(1);
        }

        // Realiza o insert dos navers presentes no projeto na tabela projects_navers
        req.body.navers.forEach( async (naver) => {
          const projects_navers = await Projects_Navers
          .query()
          .insert(
            {
              project_id: project[0].id,
              naver_id: naver
            }
          );
        });

        return res.json(project);
      } catch (err) {
        return res.status(500).json(err);
      }
    }

};
