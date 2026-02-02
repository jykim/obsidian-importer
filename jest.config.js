module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  moduleNameMapper: {
    '^obsidian$': '<rootDir>/tests/obsidian-mock.js'
  },
  transform: {
    '^.+\\.(ts|js)$': 'ts-jest'
  }
};
