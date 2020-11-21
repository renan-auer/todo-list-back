const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const router = express.Router();


const tarefasRoutes = require('./routes/tarefas.routes');

app.use('/tarefas', tarefasRoutes);

module.exports = app;