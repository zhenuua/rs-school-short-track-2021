/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  if (!(typeof n === 'number')) {
    throw new Error('Not implemented');
  }
  const arr = [];
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    const a = str.slice(0, i) + str.slice(i + 1, str.length);
    arr.push(Number(a));
  }
  return Math.max.apply(null, arr);
}

module.exports = deleteDigit;
