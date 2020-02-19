const { expect } = require('chai');
const doublePasswordFinder2 = require('../day04/doublePasswordFinder2');

describe('Part2:(loop) password generator', () => {
  it('returns array with correct passwords ', () => {
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
