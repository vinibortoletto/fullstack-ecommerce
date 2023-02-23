module.exports = {
  all: true,
  extends: '@istanbuljs/nyc-config-typescript',
  exclude: [
    'src/tests',
    'src/database/config',
    'src/database/migrations',
    'src/database/models',
    'src/database/seeders',
    'src/server.ts',
    'src/App.ts',
    'src/api/interfaces',
  ],
  include: ['src/**/*.ts'],
};
