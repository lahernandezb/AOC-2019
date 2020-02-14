const { expect } = require('chai');
const { passwordFinder1 } = require('../day04/passwordFinder1');
const { passwordFinder2 } = require('../day04/passwordFinder2');
const { generateArray } = require('../day04/generateArray');

describe('Password generator', () => {
  const start = 5;
  const end = 10;
  const array = generateArray(start, end);

  it('returns array  5, 6, 7, 8, 9, 10]', () => {
    expect(array)
      .to.have.length(6)
      .to.include.members([5, 6, 7, 8, 9, 10]);
  });

  it('returns array with 10 possible passwords (filter) ', () => {
    const result = passwordFinder1(123456, 123567);
    expect(result)
      .to.have.length(10)
      .and.to.include.members([
        '123466',
        '123477',
        '123488',
        '123499',
        '123555',
        '123556',
        '123557',
        '123558',
        '123559',
        '123566'
      ]);
  });

  it('returns array with 10 possible passwords (loop) ', () => {
    const result = passwordFinder2(123456, 123567);
    expect(result)
      .to.have.length(10)
      .and.to.include.members([
        '123466',
        '123477',
        '123488',
        '123499',
        '123555',
        '123556',
        '123557',
        '123558',
        '123559',
        '123566'
      ]);
  });
});
