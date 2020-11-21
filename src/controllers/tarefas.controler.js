const Tarefa = require("../models/Tarefa")

exports.get = async function (req, res, next) {
    const tarefas = await Tarefa.findAll(
        {
            where: {
                status: req.params.status
            },
            order: [
                ['id', 'DESC']
              ]
        }
    );
    res.status(200).send(tarefas);
};

exports.post = async function (req, res, next) {
    const resultado = await Tarefa.create({
        descricao: req.body.descricao,
        prazo: req.body.prazo,
        status: req.body.status
    })

    res.status(200).send();
};
exports.put = async function (req, res, next) {

    const tarefa = await Tarefa.findByPk(req.body.id);
    tarefa.descricao = req.body.descricao;
    tarefa.prazo = req.body.prazo;

    const resultado = await tarefa.save();
    res.status(200).send();
};
exports.delete = async function (req, res, next) {
    Tarefa.destroy({ where: { id: req.params.id } });

    res.status(200).send();
};