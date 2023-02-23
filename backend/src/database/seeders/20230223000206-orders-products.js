'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'orders_products',
      [
        {
          order_id: 1,
          product_id: 1,
        },
        {
          order_id: 1,
          product_id: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders_products', null, {});
  },
};
