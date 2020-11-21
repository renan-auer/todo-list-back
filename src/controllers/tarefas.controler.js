const Tarefa = require("../models/Tarefa")

exports.get = async function (req, res, next){
    const tarefas = await Tarefa.findAll();
    res.status(201).send(tarefas);
};

exports.post = async function (req, res, next) {

    const resultado = await Tarefa.create({
        descricao: req.body.descricao,
        prazo: req.body.prazo,
        status: req.body.status
    })
    
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};