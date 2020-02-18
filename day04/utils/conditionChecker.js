const { curry } = require('ramda');
const { isOfLengthAndOrder } = require('./isOfLengthAndOrder');

exports.conditionChecker = curry(
  (condition, data) => isOfLengthAndOrder(data) && condition(data)
);
