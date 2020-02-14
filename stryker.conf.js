module.exports = function(config) {
  config.set({
    mutate: [
      './day01/*.js',
      './day04/*.js',
      '!./day04/generator.js',
      '!./day04/index.js'
    ],
    mutator: 'javascript',
    packageManager: 'npm',
    reporters: ['clear-text', 'progress', 'dashboard'],
    testRunner: 'mocha',
    transpilers: [],
    testFramework: 'mocha',
    coverageAnalysis: 'perTest'
  });
};
