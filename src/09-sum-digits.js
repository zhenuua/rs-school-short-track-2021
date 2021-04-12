/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (!(typeof n === 'number')) {
    throw new Error('Not implemented');
  }
  let sum = 0;
  const str = n.toString();
  for (let i = str.length - 1; i >= 0; i--) {
    sum += Number(str[i]);
    if (sum >= 10) {
      sum -= Number(str[i]);
      break;
    }
  }
  return sum;
}

module.exports = getSumOfDigits;
