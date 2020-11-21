'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tarefa', [{
      descricao: 'Terminar projeto 1',
      prazo: '2221-12-24',
      status: 'CONCLUIDO'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tarefa', null, {});
  }
};
