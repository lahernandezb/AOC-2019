const { expect } = require('chai');
const duplicatesPasswordFinder1 = require('../day04/duplicatesPasswordFinder1');

describe('Part 1: (filter) password generartor', () => {
  it('returns array with correct correct passwords ', () => {
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
});
