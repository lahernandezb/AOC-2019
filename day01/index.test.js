const expect = require('chai').expect;
const getTotalFuel = require('./index');

describe('day01', () => {
  it('Returns 34,241 give mass', () => {
    const mass = `12
      14
      1969
      100756`;

    const totalFuel = getTotalFuel(mass);

    expect(totalFuel).to.equal(34241);
  });
});
