const sortByNumericValue = (a, b) => a - b;

const conditionCheck = numString =>
  numString.length === 6 &&
  numString === [...numString].sort(sortByNumericValue).join('');

const doublePasswordFinder2 = (start, end) => {
  const result = [];

  for (let i = start; i <= end; i++) {
    const numString = i.toString();

    if (conditionCheck(numString)) {
      let cache = new Set();

      [...numString].forEach(item => {
        cache[item] = cache[item] ? cache[item] + 1 : 1;
      });

      Object.keys(cache).filter(key => cache[key] === 2).length !== 0 &&
        result.push(numString);
    }
  }
  return result;
};

module.exports = doublePasswordFinder2;
