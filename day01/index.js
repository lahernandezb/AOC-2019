const { pipe, reduce, add } = require('ramda');
const { convertInputToArray } = require('./toArray');
const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8');

const getFuelRequirementByMass = m => Math.floor(m / 3) - 2;

const getFuel1 = array => array.map(item => getFuelRequirementByMass(item));

const reduceFuelArr = fuelArr =>
  reduce((total, currentValue) => total + currentValue, 0, fuelArr);

const getFuelForMass = pipe(convertInputToArray, getFuel1, reduceFuelArr);

//-------------------------------------------------------------------
// PART TWO
//-------------------------------------------------------------------

const getFuelRecursively = (totalFuel, accumulator = 0) =>
  totalFuel <= 0
    ? accumulator
    : getFuelRecursively(
        getFuelRequirementByMass(totalFuel),
        totalFuel + accumulator
      );

const getFuel = input =>
  reduce(
    (acc, value) =>
      add(acc, getFuelRecursively(getFuelRequirementByMass(value))),
    0,
    convertInputToArray(input)
  );

module.exports = {
  getFuelForMass,
  getFuel
};
