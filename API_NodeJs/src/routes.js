const express = require('express');
const NaversController = require('./controllers/NaversController');
const ProjectsController = require('./controllers/ProjectsController');

const routes = express.Router();

// Rotas Navers
routes.get('/navers', NaversController.index);
routes.get('/navers/:id', NaversController.show);
routes.post('/navers', NaversController.store);

// Rotas Projetos
routes.get('/projetos', ProjectsController.index);
routes.get('/projetos/:id', ProjectsController.show);
routes.post('/projetos', ProjectsController.store);

module.exports = routes;
