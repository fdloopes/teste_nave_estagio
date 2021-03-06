/* QUERIE QUE TRAZ TODOS OS PROJETOS COM SEUS RESPECTIVOS NAVERS */

SELECT p.name AS Name_Projects, n.name AS Name_Navers FROM projects AS p, navers AS n, projects_navers AS pn WHERE p.id = pn.project_id and n.id = pn.naver_id ORDER BY p.name;
