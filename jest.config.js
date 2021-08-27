module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  coverageReporters: ['lcov', 'html', 'text', 'clover'],
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  // transform: {
  //   '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  // },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)?$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [],
  setupFiles: ['<rootDir>/enzyme.config.js'],
};
