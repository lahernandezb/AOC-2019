const sortByNumericValue = (a, b) => a - b;

exports.isOfLengthAndOrder = numString =>
  numString.length === 6 &&
  numString === [...numString].sort(sortByNumericValue).join('');
