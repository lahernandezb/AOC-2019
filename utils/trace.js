const { curry } = require('ramda');

module.exports = curry((msg, input) => {
  console.log(`${msg}`);
  console.log(input);
  console.log(typeof input);

  return input;
});
