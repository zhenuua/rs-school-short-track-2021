/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!Array.isArray(matrix)) {
    throw new Error('Not implemented');
  }
  let sum = 0;
  const columnCount = matrix[0].length;
  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[j][i];
      if (matrix[j][i] === 0) {
        break;
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
