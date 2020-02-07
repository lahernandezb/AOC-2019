const { pipe, reduce, add } = require('ramda');
const convertInputToArr = require('./toArray');

const inputData = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8');

const getFuelRequirementByMass = m => Math.floor(m / 3) - 2;

const reduceFuelArr = fuelArr =>
  fuelArr.reduce((total, currentValue) => total + currentValue);

const getFuelForMass = pipe(
  convertInputToArr,
  getFuelRequirementByMass,
  reduceFuelArr
)(inputData);

console.log(getFuelForMass());

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

const getFuel = () =>
  reduce(
    (acc, value) =>
      add(acc, getFuelRecursively(getFuelRequirementByMass(value))),
    0,
    convertInputToArr(inputData)
  );

console.log(getFuel());
