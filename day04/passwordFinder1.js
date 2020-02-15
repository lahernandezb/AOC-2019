const { generateArray } = require('./generateArray');
const { isConsecutiveDuplicate } = require('../utils/isConsecutiveDuplicate');
const { pipe, filter, map } = require('ramda');

const toStringsArray = array => map(item => item.toString(), array);

const sortByNumericValue = (a, b) => a - b;

const conditionCheck = numString =>
  numString.length === 6 &&
  isConsecutiveDuplicate(numString) &&
  numString === [...numString].sort(sortByNumericValue).join('');

const passwordFinder1 = (start, end) =>
  pipe(generateArray, toStringsArray, filter(conditionCheck))(start, end);

module.exports = passwordFinder1;
