const express = require('express');
const router = express.Router();

const controller = require('../controllers/tarefas.controler')


router.get('/:status', controller.get);
router.post('/', controller.post);
router.put('/', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;