/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  if (!Array.isArray(array)) {
    throw new Error('Not implemented');
  }

  /* for (let i = 0; i < array.length; i++) {
    if (!(typeof array[i] === 'number')) {
      return false;
    }
  } */

  array.sort((a, b) => a - b);
  for (let j = 0; j < array.length; j++) {
    if (array[j] === value) {
      return j;
    }
  }
  return false;
}
module.exports = findIndex;
