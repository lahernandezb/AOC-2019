const { generateArray } = require('./generateArray');
const { pipe, filter, map } = require('ramda');

const toStringsArray = array => map(item => item.toString(), array);

const sortByNumericValue = (a, b) => a - b;

const createCache = numString => {
  const cache = new Set();

  [...numString].forEach(item => {
    cache[item] = cache[item] ? cache[item] + 1 : 1;
  });

  return cache;
};

const isGroupOfTwo = numString => {
  const cache = createCache(numString);

  return Object.keys(cache).filter(key => cache[key] === 2).length !== 0;
};

const conditionCheck = numString =>
  numString.length === 6 &&
  numString === [...numString].sort(sortByNumericValue).join('') &&
  isGroupOfTwo(numString);
const part2 = (start, end) =>
  pipe(generateArray, toStringsArray, filter(conditionCheck))(start, end);

console.log(part2(372304, 847060).length);
