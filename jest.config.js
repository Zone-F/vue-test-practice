module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.vue$': '@vue/vue3-jest',

    },
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/__tests__/**/*.spec.js']
  }