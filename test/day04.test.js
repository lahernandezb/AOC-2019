const { expect } = require('chai');
const passswordFinder = require('../day04/passwordFinder1');
const { generateArray } = require('../day04/generateArray');

describe('Password generator', () => {
  const start = 1;
  const end = 10;
  const array = generateArray(start, end);

  it('returns array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    expect(array).to.include.members([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('returns empty array []', () => {
    const result = passswordFinder(array);
    expect(result).to.be.an('array').that.is.empty;
  });
});
