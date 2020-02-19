module.exports = function(config) {
  config.set({
    mutate: [
      './day04/*.js',
      '!./day04/generator.js',
      '!./day04/index.js',
      '!./day04/passwordFinder3.js'
    ],
    mutator: 'javascript',
    packageManager: 'npm',
    reporters: ['clear-text', 'progress', 'html'],
    testRunner: 'mocha',
    transpilers: [],
    testFramework: 'mocha',
    coverageAnalysis: 'perTest'
  });
};
