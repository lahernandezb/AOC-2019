const { range } = require('ramda');

exports.generateArray = (start, end) => range(start, end + 1);
