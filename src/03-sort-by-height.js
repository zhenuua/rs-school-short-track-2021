/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Not implemented');
  }
  const sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  const result = [];

  for (let k = sortArr.length; k--;) {
    if (sortArr[k] === -1) {
      sortArr.splice(k, 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else if (sortArr.length !== 0) {
      result.push(sortArr[0]);
      sortArr.shift();
    }
  }
  return result;
}

module.exports = sortByHeight;
