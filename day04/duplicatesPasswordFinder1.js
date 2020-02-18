const { generateArray } = require('./utils/generateArray');
const { isConsecutiveDuplicates } = require('../utils/isConsecutiveDuplicates');
const { toStringsArray } = require('./utils/toStringsArray');
const { conditionChecker } = require('./utils/conditionChecker');

const { pipe, filter } = require('ramda');

const duplicatesPasswordFinder1 = (start, end) =>
  pipe(
    generateArray,
    toStringsArray,
    filter(conditionChecker(isConsecutiveDuplicates))
  )(start, end);

module.exports = duplicatesPasswordFinder1;
