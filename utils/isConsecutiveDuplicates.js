// matches all consecutive duplicates in string argument.
exports.isConsecutiveDuplicates = numString => /(.)\1/.test(numString);
