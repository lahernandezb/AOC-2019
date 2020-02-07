const expect = require('chai').expect;
const { getFuelForMass, getFuel } = require('./index');

describe('day01', () => {
  it('Returns 34,241 given mass', () => {
    const mass = `12
      14
      1969
      100756`;

    const fuel = getFuelForMass(mass);

    expect(fuel).to.equal(34241);
  });

  it('Returns fuel requried for fuel  weight', () => {
    const fuelMass = 1969;
    const totalFuel = getFuel(fuelMass);

    expect(totalFuel).to.equal(966);
  });
});
