const { generateArray } = require('./utils/generateArray');
const { toStringsArray } = require('./utils/toStringsArray');
const { conditionChecker } = require('./utils/conditionChecker');
const { pipe, filter } = require('ramda');

const digitCounter = numString => {
  const counter = new Set();

  [...numString].forEach(item => {
    counter[item] = counter[item] ? counter[item] + 1 : 1;
  });

  return counter;
};

const isGroupOfTwo = numString => {
  const counter = digitCounter(numString);

  return Object.keys(counter).filter(key => counter[key] === 2).length !== 0;
};

const doublePasswordFinder1 = (start, end) =>
  pipe(
    generateArray,
    toStringsArray,
    filter(conditionChecker(isGroupOfTwo))
  )(start, end);

module.exports = doublePasswordFinder1;
