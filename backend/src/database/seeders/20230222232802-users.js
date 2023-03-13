module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          full_name: 'Dalva Moso Bortoletto',
          email: 'meu@email.com',
          password: '12345678',
        },
        {
          id: 2,
          full_name: 'Antônio Pedro Bortoletto',
          email: 'meu@email.com',
          password: '12345678',
        },
        {
          id: 3,
          full_name: 'Elaine Cristina Bortoletto Fedrizze',
          email: 'meu@email.com',
          password: '12345678',
        },
        {
          id: 4,
          full_name: 'Antônio Israel Bortoletto',
          email: 'meu@email.com',
          password: '12345678',
        },
        {
          id: 5,
          full_name: 'Alessandra Karina Bortoletto Martini',
          email: 'meu@email.com',
          password: '12345678',
        },
        {
          id: 6,
          full_name: 'Vinicius Aparecido Bortoletto',
          email: 'meu@email.com',
          password: '12345678',
        },
        {
          id: 7,
          full_name: 'José Nelson Fedrizze',
          email: 'meu@email.com',
          password: '12345678',
        },
        {
          id: 8,
          full_name: 'Vladimir Martini',
          email: 'meu@email.com',
          password: '12345678',
        },
        {
          id: 9,
          full_name: 'Roly Rodrigues Alier Bortoletto',
          email: 'meu@email.com',
          password: '12345678',
        },
        {
          id: 10,
          full_name: 'Leonardo Bortoletto Martini',
          email: 'meu@email.com',
          password: '12345678',
        },
        {
          id: 11,
          full_name: 'Bryan Bortoletto Alier',
          email: 'meu@email.com',
          password: '12345678',
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
