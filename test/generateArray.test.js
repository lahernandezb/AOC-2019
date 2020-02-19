const { expect } = require('chai');

const { generateArray } = require('../day04/utils/generateArray');

describe('Array generator', () => {
  const start = 5;
  const end = 10;
  const array = generateArray(start, end);

  it('returns array  5, 6, 7, 8, 9, 10]', () => {
    expect(array)
      .to.have.length(6)
      .to.include.members([5, 6, 7, 8, 9, 10]);
  });
});
