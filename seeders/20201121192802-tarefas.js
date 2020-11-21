'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tarefas', [
      {
        descricao: 'Terminar projeto 1',
        prazo: '2020-11-24',
        status: 'CONCLUIDO'
      },
      {
        descricao: 'Terminar projeto 2',
        prazo: '2020-12-24',
        status: 'PENDENTE'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tarefas', null, {});
  }
};
