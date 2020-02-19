const { expect } = require('chai');
const doublePasswordFinder1 = require('../day04/doublePasswordFinder1');

describe(' Part 2: (filter) password generator', () => {
  it('returns array with correct correct passwords ', () => {
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
});
