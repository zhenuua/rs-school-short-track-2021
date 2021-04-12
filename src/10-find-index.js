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
  if (array.indexOf(value) === -1) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (!(typeof array[i] === 'number')) {
      return false;
    }
  }

  array.sort((a, b) => a - b);

  return array.indexOf(value);
}

module.exports = findIndex;
