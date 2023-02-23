'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          id: 1,
          title: 'Produto 1',
          description: 'Descrição do produto',
          price: 10,
          quantity: 10,
        },
        {
          id: 2,
          title: 'Produto 2',
          description: 'Descrição do produto',
          price: 10,
          quantity: 10,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
