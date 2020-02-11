const { generateArray } = require('./generateArray');
const { pipe, filter, map } = require('ramda');

const rangeArray = generateArray(372304, 847068);

const toStringsArray = array => map(item => item.toString(), array);

const conditionCheck = num =>
  num.length === 6 && /(.)\1/.test(num) && num === [...num].sort().join('');

const possiblePasswords = rangeArray =>
  pipe(toStringsArray, filter(conditionCheck))(rangeArray);

module.exports = possiblePasswords;
console.log(possiblePasswords(rangeArray).length);
