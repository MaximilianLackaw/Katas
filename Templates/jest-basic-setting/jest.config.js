module.exports = {
  testMatch: [
    '<rootDir>/test/*tests?.[jt]s',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'node',
  ],
  globals: {
    'ts-jest': {
      skipBabel: true,
    }
  }
};
