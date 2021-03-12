/* Script de criação de tabelas */

DROP DATABASE base_nave;
CREATE DATABASE base_nave;
use base_nave;

/* TABELA NAVERS */
CREATE TABLE navers(id BINARY(16) NOT NULL PRIMARY KEY, name VARCHAR(60) NOT NULL, job_role VARCHAR(40), birthdate DATE, admission_date DATE NOT NULL, created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP);

/* TABELA PROJECTS */
CREATE TABLE projects(id BINARY(16) NOT NULL PRIMARY KEY, name VARCHAR(60) NOT NULL, created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP);

/* TABELA PROJECTS_NAVERS*/
CREATE TABLE projects_navers(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, project_id BINARY(16) NOT NULL,CONSTRAINT fk_project_id FOREIGN KEY(project_id) REFERENCES projects(id), naver_id BINARY(16) NOT NULL,CONSTRAINT fk_naver_id FOREIGN KEY(naver_id) REFERENCES navers(id));
