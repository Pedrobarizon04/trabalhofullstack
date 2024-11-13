'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [
      {
        Nome: 'João da Silva',
        CPF: '12345678901',
        Telefone: '123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Nome: 'Maria Oliveira',
        CPF: '98765432100',
        Telefone: '987654321',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
