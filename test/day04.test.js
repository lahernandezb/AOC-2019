const { expect } = require('chai');
const duplicatesPasswordFinder1 = require('../day04/duplicatesPasswordFinder1');
const duplicatesPasswordFinder2 = require('../day04/duplicatesPasswordFinder2');
const doublePasswordFinder1 = require('../day04/doublePasswordFinder1');
const doublePasswordFinder2 = require('../day04/doublePasswordFinder2');
const { generateArray } = require('../day04/utils/generateArray');

describe('Password generator', () => {
  const start = 5;
  const end = 10;
  const array = generateArray(start, end);

  it('returns array  5, 6, 7, 8, 9, 10]', () => {
    expect(array)
      .to.have.length(6)
      .to.include.members([5, 6, 7, 8, 9, 10]);
  });

  it('returns array with correct correct passwords (filter) Part 1', () => {
    const result = duplicatesPasswordFinder1(123456, 123567);
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

  it('returns array with correct correct passwords (loop) Part 1', () => {
    const result = duplicatesPasswordFinder2(123456, 123567);
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

  it('returns array with correct correct passwords (filter) Part 2', () => {
    const result = doublePasswordFinder1(123456, 123567);
    expect(result)
      .to.have.length(9)
      .and.to.include.members([
        '123466',
        '123477',
        '123488',
        '123499',
        '123556',
        '123557',
        '123558',
        '123559',
        '123566'
      ]);
  });
  it('returns array with correct passwords (loop) Part 2', () => {
    const result = doublePasswordFinder2(123456, 123567);
    expect(result)
      .to.have.length(9)
      .and.to.include.members([
        '123466',
        '123477',
        '123488',
        '123499',
        '123556',
        '123557',
        '123558',
        '123559',
        '123566'
      ]);
  });
});
