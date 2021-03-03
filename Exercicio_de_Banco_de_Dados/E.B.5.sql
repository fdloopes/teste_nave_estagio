/* QUERIE QUE TRAZ TODOS OS PROJETOS COM A QUANTIDADE DE NAVERS DE CADA UM */

SELECT DISTINCT p.name AS Name_Projects, (SELECT COUNT(project_id) FROM projects_navers WHERE p.id = project_id) AS N_Navers FROM projects AS p, projects_navers AS pn WHERE p.id = pn.project_id;
