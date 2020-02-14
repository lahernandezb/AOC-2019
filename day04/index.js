const { passwordFinder1 } = require('./passwordFinder1');
const { passwordFinder2 } = require('./passwordFinder2');

// Retrieve acceptable password options by calling either methods with a start and end value.

// getPasswordsFilter filters through a generated array of all possibilites within range.
const getPasswordsFilter = passwordFinder1;

// getPasswordsLoop leverages a for loop to generarte the array of acceptable passwords.
const getPasswordsLoop = passwordFinder2;
