module.exports = {
  all: true,
  extends: '@istanbuljs/nyc-config-typescript',
  exclude: ['src/database', 'src/api/interfaces'],
  include: ['src/**/*.ts'],
};
