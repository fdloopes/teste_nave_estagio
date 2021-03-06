/* Script de limpeza e inserção de dados nas tabelas */

/* LIMPA OS DADOS DAS TABELAS */
DELETE FROM projects_navers;
DELETE FROM projects;
DELETE FROM navers;

/* INSERÇÃO TABELA NAVERS */
INSERT INTO navers(id,name,job_role,birthdate,admission_date) VALUES (UUID_TO_BIN(UUID()),'Renato Medeiros','Desenvolvedor','1996-03-02','2019-07-22');
INSERT INTO navers(id,name,job_role,birthdate,admission_date) VALUES (UUID_TO_BIN(UUID()),'Juca da Silva','Analista de sistemas','2000-10-22','2020-03-02');
INSERT INTO navers(id,name,job_role,birthdate,admission_date) VALUES (UUID_TO_BIN(UUID()),'Daniel Gonçalves','Designer','1998-04-09','2015-06-28');
INSERT INTO navers(id,name,job_role,birthdate,admission_date) VALUES (UUID_TO_BIN(UUID()),'Matheus Garcia','Gerente de projetos','1999-01-13','2011-07-15');
INSERT INTO navers(id,name,job_role,birthdate,admission_date) VALUES (UUID_TO_BIN(UUID()),'Gabriel Pinheiro','Desenvolvedor Front-end','2002-06-21','2017-11-19');

/* INSERÇÃO TABELA PROJECTS */
INSERT INTO projects(id,name) VALUES (UUID_TO_BIN(UUID()),'Project 1');
INSERT INTO projects(id,name) VALUES (UUID_TO_BIN(UUID()),'Project 2');
INSERT INTO projects(id,name) VALUES (UUID_TO_BIN(UUID()),'Project 3');
INSERT INTO projects(id,name) VALUES (UUID_TO_BIN(UUID()),'Project 4');
INSERT INTO projects(id,name) VALUES (UUID_TO_BIN(UUID()),'Project 5');

/* INSERÇÃO TABELA PROJECTS_NAVERS */
INSERT INTO projects_navers(project_id,naver_id) VALUES ((SELECT id FROM projects WHERE name='Project 1'),(SELECT id FROM navers WHERE name='Renato Medeiros'));
INSERT INTO projects_navers(project_id,naver_id) VALUES ((SELECT id FROM projects WHERE name='Project 3'),(SELECT id FROM navers WHERE name='Gabriel Pinheiro'));
INSERT INTO projects_navers(project_id,naver_id) VALUES ((SELECT id FROM projects WHERE name='Project 2'),(SELECT id FROM navers WHERE name='Matheus Garcia'));
INSERT INTO projects_navers(project_id,naver_id) VALUES ((SELECT id FROM projects WHERE name='Project 5'),(SELECT id FROM navers WHERE name='Daniel Gonçalves'));
INSERT INTO projects_navers(project_id,naver_id) VALUES ((SELECT id FROM projects WHERE name='Project 4'),(SELECT id FROM navers WHERE name='Juca da Silva'));
INSERT INTO projects_navers(project_id,naver_id) VALUES ((SELECT id FROM projects WHERE name='Project 1'),(SELECT id FROM navers WHERE name='Matheus Garcia'));
INSERT INTO projects_navers(project_id,naver_id) VALUES ((SELECT id FROM projects WHERE name='Project 1'),(SELECT id FROM navers WHERE name='Daniel Gonçalves'));
INSERT INTO projects_navers(project_id,naver_id) VALUES ((SELECT id FROM projects WHERE name='Project 2'),(SELECT id FROM navers WHERE name='Juca da Silva'));
INSERT INTO projects_navers(project_id,naver_id) VALUES ((SELECT id FROM projects WHERE name='Project 5'),(SELECT id FROM navers WHERE name='Juca da Silva'));
INSERT INTO projects_navers(project_id,naver_id) VALUES ((SELECT id FROM projects WHERE name='Project 4'),(SELECT id FROM navers WHERE name='Matheus Garcia'));

/* UPDATES DE TESTE PARA CAMPOS updated_at */
UPDATE projects SET updated_at = now() WHERE name='Project 2';
UPDATE navers SET updated_at = now() WHERE name='Matheus Garcia';
