/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!(typeof str === 'string')) {
    throw new Error('Not implemented');
  }

  let count = 1;
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        arr.push(`${count}${str[i]}`);
      } else {
        arr.push(`${str[i]}`);
      }
      count = 1;
    }
  }
  return arr.join('');
}
module.exports = encodeLine;
