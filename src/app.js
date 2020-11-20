const express = require('express');
const app = express();
const router = express.Router();


const tarefasPendentesRoutes = require('./routes/tarefas-pendentes-routes');
const tarefasConcluidasRoutes = require('./routes/tarefas-concluidas-routes');

app.use('/tarefas-pendentes', tarefasPendentesRoutes);
app.use('/tarefas-concluidas', tarefasConcluidasRoutes);
module.exports = app;