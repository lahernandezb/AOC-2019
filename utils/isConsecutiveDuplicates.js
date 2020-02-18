// matches all consecutive duplicates in string argument.
exports.isConsecutiveDuplicate = numString => /(.)\1/.test(numString);
