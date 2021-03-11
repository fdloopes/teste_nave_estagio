const connection = require('./src/database/connection');
const express = require('express');
const routes = require('./src/routes');

// Iniciando o APP
connection();
const app = express();

app.use(express.json());
app.use(routes);

app.listen(8080, () => console.log('Server running on port 8080'));
