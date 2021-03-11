const Navers  = require('../models/Navers');
const Projects_Navers  = require('../models/Projects_Navers');

module.exports = {

    // Index -> Retorna um array com todos os navers
    async index(req,res) {
        try {
          const navers = await Navers
          .query()
          .select('id','name','birthdate','admission_date','job_role')
          .orderBy('name');
          return res.json(navers);
        } catch(err){
          return res.status(500).json(err);
        }
    },

    // Show -> Retorna um objeto com detalhes de um naver
    // e um array com os projetos que participa
    async show(req,res) {
      try {
        const naver = await Navers
        .query()
        .findById(req.params.id)
        .select('id','name','birthdate','admission_date','job_role')
        .withGraphFetched('projects')
        .modifyGraph('projects', builder => {
          builder.select('projects.id','projects.name');
        });
        return res.json(naver);
      } catch (err) {
        return res.status(500).json(err);
      }
    },

    // Store -> Cria um novo registro de naver no banco
    // e associa ele aos seus projetos.
    // Retorna o objeto naver criado
    async store(req,res){
      try {
        
        // Realiza o insert do naver na tabela navers
        let naver = await Navers.query().insert(req.body);

        // Verifica se o id foi retornado
        if(naver.id == 0){
          naver = await Navers.query()
          .select('id','name','birthdate','admission_date','job_role')
          .where('name','=',req.body.name)
          .orderBy('created_at','desc').limit(1);
        }

        // Realiza o insert dos projetos do naver na tabela projects_navers
        req.body.projects.forEach( async (project) => {
          const projects_navers = await Projects_Navers
          .query()
          .insert(
            {
              project_id: project,
              naver_id: naver[0].id
            }
          );
        });

        return res.json(naver);
      } catch (err) {
        return res.status(500).json(err);
      }
    }

};
