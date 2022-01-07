module.exports = function reverse (n) {
  let numString = n.toString();
  numString = numString.split('').reverse().join('');
  return parseInt(numString, 10);
}
