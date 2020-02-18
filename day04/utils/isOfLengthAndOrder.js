const { sortByNumericValue } = require('./sortByNumericValue');

exports.isOfLengthAndOrder = numString =>
  numString.length === 6 &&
  numString === [...numString].sort(sortByNumericValue).join('');
