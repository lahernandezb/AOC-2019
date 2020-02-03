const R = require('ramda');
const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8');

const convertInputToArr = input =>
  input
    .toString()
    .split(/\n|\$/)
    .map(item => parseInt(item, 10));

const getFuelRequirementByMass = mass => mass.map(m => Math.floor(m / 3) - 2);

const reduceFuelArr = fuelArr =>
  fuelArr.reduce((total, currentValue) => total + currentValue);

const getFuelForMass = R.pipe(
  convertInputToArr,
  getFuelRequirementByMass,
  reduceFuelArr
);

//-------------------------------------------------------------------
// PART TWO
//-------------------------------------------------------------------
const getFuelForFuelWeight = totalFuel => {
  if (totalFuel <= 0) {
    return totalFuel;
  } else {
    const newValue = getFuelForMass(totalFuel);

    return newValue < 0
      ? totalFuel
      : (totalFuel += getFuelForFuelWeight(newValue));
  }
};

console.log(getFuelForFuelWeight(34241));
module.exports = {
  getFuelForMass,
  getFuelForFuelWeight
};
