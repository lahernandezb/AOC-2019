const { generateArray } = require('./utils/generateArray');
const { toStringsArray } = require('./utils/toStringsArray');
const { conditionChecker } = require('./utils/conditionChecker');
const { pipe, filter } = require('ramda');

const isADouble = key => counter[key] === 2;

const digitCounter = numString => {
  const counter = new Set();

  [...numString].forEach(item => {
    counter[item] = counter[item] ? counter[item] + 1 : 1;
  });

  return counter;
};

const isGroupOfTwo = numString => {
  const counter = digitCounter(numString);

  return Object.keys(counter).filter(isADouble).length !== 0;
};

exports.doublePasswordFinder1 = (start, end) =>
  pipe(
    generateArray,
    toStringsArray,
    filter(conditionChecker(isGroupOfTwo))
  )(start, end);
