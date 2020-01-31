const R = require('ramda');
const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8');

console.log(inputData);

const convertInputToArr = input =>
  input.split(/\n/).map(item => parseInt(item, 10));

console.log(convertInputToArr(inputData));

const getFuelRequirementByMass = mass =>
  mass.map(mass => Math.floor(mass / 3) - 2);

console.log(getFuelRequirementByMass(convertInputToArr(inputData)));

const getTotalFuel = fuelArr =>
  fuelArr.reduce((total, currentValue) => total + currentValue);

const test = R.compose(
  getTotalFuel,
  getFuelRequirementByMass,
  convertInputToArr
);

console.log(test(inputData));
