const start = 372304;
const end = 847068;

const conditionCheck = num =>
  num.length === 6 && /(.)\1/.test(num) && num === [...num].sort().join('');

const possiblePasswords = [];

for (let i = start; i <= end; i++) {
  if (conditionCheck(i.toString())) {
    possiblePasswords.push(i);
  }
}
