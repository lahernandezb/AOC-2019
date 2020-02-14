const { isConsecutiveDuplicate } = require('../utils/isConsecutiveDuplicate');
const possiblePasswords = [];

const conditionCheck = numString =>
  numString.length === 6 &&
  isConsecutiveDuplicate(numString) &&
  numString === [...numString].sort().join('');

exports.passwordFinder2 = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (conditionCheck(i.toString())) {
      possiblePasswords.push(i.toString());
    }
  }
  return possiblePasswords;
};
