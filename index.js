/**
 * Iterates an array.
 *
 * @param  {Array} arr
 * @param  {Function} fn    Iterator
 * @param  {Object} ctx     Context
 * @return {Array}
 */
module.exports = function forEach(arr, fn, ctx) {
  for (var i = 0, len = arr.length; i < len; i++) {
    // if the iterator return false,
    // it breaks the loop
    if (false === fn.call(ctx, arr[i], i, arr)) {
      return arr;
    }
  }

  return arr;
};