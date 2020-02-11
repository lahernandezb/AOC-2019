exports.generateArray = (start, end) =>
  Array.from({ length: end + 1 - start }, (x, i) => i + start);
