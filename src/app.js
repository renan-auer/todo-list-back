const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
const router = express.Router();


const tarefasRoutes = require('./routes/tarefas.routes');

app.use('/tarefas', tarefasRoutes);

module.exports = app;