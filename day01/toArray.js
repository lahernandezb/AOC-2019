const fs = require('fs');
const path = require('path');

module.exports = input =>
  input
    .toString()
    .split(/\n|\$/)
    .map(item => parseInt(item, 10));
