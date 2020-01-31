const R = require('ramda');
const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8');

const convertInputToArr = input =>
  input.split(/\n/).map(item => parseInt(item, 10));

const getFuelRequirementByMass = mass => mass.map(m => Math.floor(m / 3) - 2);

const reduceFuelArr = fuelArr =>
  fuelArr.reduce((total, currentValue) => total + currentValue);

const getTotalFuel = R.compose(
  reduceFuelArr,
  getFuelRequirementByMass,
  convertInputToArr
);

//-------------------------------------------------------------------
// PART TWO
//-------------------------------------------------------------------
const getFuelForFuelWeight = totalFuel => {
  if (totalFuel <= 0) {
    return totalFuel;
  } else {
    const newValue = getTotalFuel(totalFuel);
    console.log({ newValue });

    return (totalFuel += getFuelForFuelWeight(newValue));
  }
};
