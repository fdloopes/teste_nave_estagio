
exports.seed = async function(knex) {

  await knex('navers').insert([
    {
      name: "Renato Medeiros",
      job_role: "Desenvolvedor",
      birthdate: "1996-03-02",
      admission_date: "2019-07-22"
    },
    {
      name: "Juca da Silva",
      job_role: "Analista de sistemas",
      birthdate: "2000-10-22",
      admission_date: "2020-03-02"
    },
    {
      name: "Daniel Gonçalves",
      job_role: "Designer",
      birthdate: "1998-04-09",
      admission_date: "2015-06-28"
    },
    {
      name: "Matheus Garcia",
      job_role: "Gerente de projetos",
      birthdate: "1999-01-13",
      admission_date: "2011-07-15"
    },
    {
      name: "Gabriel Pinheiro",
      job_role: "Desenvolvedor Front-End",
      birthdate: "2002-06-21",
      admission_date: "2017-11-19"
    }
  ]);

  await knex('projects').insert([
    {
      name: "Project 1"
    },
    {
      name: "Project 2"
    },
    {
      name: "Project 3"
    },
    {
      name: "Project 4"
    },
    {
      name: "Project 5"
    }
  ]);

  await knex('projects_navers').insert([
    {
      project_id: knex.select('id').from('projects').where({
        name: 'Project 1'
      }),
      naver_id: knex.select('id').from('navers').where({
        name: 'Renato Medeiros'
      })
    },
    {
      project_id: knex.select('id').from('projects').where({
        name: 'Project 3'
      }),
      naver_id: knex.select('id').from('navers').where({
        name: 'Gabriel Pinheiro'
      })
    },
    {
      project_id: knex.select('id').from('projects').where({
        name: 'Project 2'
      }),
      naver_id: knex.select('id').from('navers').where({
        name: 'Matheus Garcia'
      })
    },
    {
      project_id: knex.select('id').from('projects').where({
        name: 'Project 5'
      }),
      naver_id: knex.select('id').from('navers').where({
        name: 'Daniel Gonçalves'
      })
    },
    {
      project_id: knex.select('id').from('projects').where({
        name: 'Project 4'
      }),
      naver_id: knex.select('id').from('navers').where({
        name: 'Juca da Silva'
      })
    },
    {
      project_id: knex.select('id').from('projects').where({
        name: 'Project 1'
      }),
      naver_id: knex.select('id').from('navers').where({
        name: 'Matheus Garcia'
      })
    },
    {
      project_id: knex.select('id').from('projects').where({
        name: 'Project 1'
      }),
      naver_id: knex.select('id').from('navers').where({
        name: 'Daniel Gonçalves'
      })
    },
    {
      project_id: knex.select('id').from('projects').where({
        name: 'Project 2'
      }),
      naver_id: knex.select('id').from('navers').where({
        name: 'Juca da Silva'
      })
    },
    {
      project_id: knex.select('id').from('projects').where({
        name: 'Project 5'
      }),
      naver_id: knex.select('id').from('navers').where({
        name: 'Juca da Silva'
      })
    },
    {
      project_id: knex.select('id').from('projects').where({
        name: 'Project 4'
      }),
      naver_id: knex.select('id').from('navers').where({
        name: 'Matheus Garcia'
      })
    }
  ]);
  
};
