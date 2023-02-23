'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'orders',
      [
        {
          id: 1,
          status: 'Em andamento',
          user_id: 1,
          createdAt: new Date('2011-08-01T19:58:00.000Z'),
          updatedAt: new Date('2011-08-01T19:58:00.000Z'),
        },
        {
          id: 2,
          status: 'Em andamento',
          user_id: 1,
          createdAt: new Date('2011-08-01T19:58:00.000Z'),
          updatedAt: new Date('2011-08-01T19:58:00.000Z'),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  },
};
