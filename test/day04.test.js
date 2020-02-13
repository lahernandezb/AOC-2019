const { expect } = require('chai');
const possiblePasswords = require('../day04/index');
const { generateArray } = require('../day04/generateArray');

describe('Password generator', () => {
  it('returns an array', () => {
    const start = 372304;
    const end = 847068;
    const array = generateArray(start, end);
    const result = possiblePasswords(array);

    expect(result).to.be.an('array');
  });
});
