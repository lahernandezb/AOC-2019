const { isConsecutiveDuplicates } = require('../utils/isConsecutiveDuplicates');
const possiblePasswords = [];

const conditionCheck = numString =>
  numString.length === 6 &&
  isConsecutiveDuplicates(numString) &&
  numString === [...numString].sort().join('');

const duplicatesPasswordFinder2 = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (conditionCheck(i.toString())) {
      possiblePasswords.push(i.toString());
    }
  }
  return possiblePasswords;
};

module.exports = duplicatesPasswordFinder2;
