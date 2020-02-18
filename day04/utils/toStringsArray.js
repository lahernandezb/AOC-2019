const { map } = require('ramda');

exports.toStringsArray = array => map(item => item.toString(), array);
