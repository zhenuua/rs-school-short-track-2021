/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (!(typeof s1 === 'string') || !(typeof s2 === 'string')) {
    throw new Error('Not implemented');
  }
  let result = 0;
  const newS1 = s1.toLowerCase().split('');

  let newS2 = s2.toLowerCase().split('');

  for (let i = 0; i < newS1.length; i++) {
    for (let j = 0; j < newS2.length; j++) {
      if (newS1[i] === newS2[j]) {
        result += 1;
        newS2 = newS2.slice(0, j) + newS2.slice(j + 1);
        break;
      }
    }
  }

  return result;
}

module.exports = getCommonCharacterCount;
