
exports.up = function(knex, Promise) {
  return knex.schema.createTable('navers', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
    table.string('name',60).notNullable();
    table.string('job_role',40);
    table.date('birthdate','YYYY-MM-DD');
    table.date('admission_date','YYYY-MM-DD').notNullable();
    table.timestamps(true,true);
  }).createTable('projects', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
    table.string('name',60).notNullable();
    table.timestamps(true,true);
  }).createTable('projects_navers', (table)  => {
    table.increments();
    table.uuid('project_id').notNullable();
    table.foreign('project_id').references('projects.id');
    table.uuid('naver_id').notNullable();
    table.foreign('naver_id').references('navers.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects_navers').dropTable('projects').dropTable('navers');
};
