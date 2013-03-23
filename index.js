/**
 * Iterates an array.
 * If the iterator return false, it breaks the loop.
 *
 * @param  {Array} arr
 * @param  {Function} fn    Iterator
 * @param  {Object} ctx     [Optional] Context
 * @return {Array}
 */
module.exports = function forEach(arr, fn, ctx) {
  var len = arr.length;
  var i;

  if (!ctx) {
    for (i = 0; i < len; i++) {
      if (false === fn(arr[i], i, arr)) {
        return arr;
      }
    }
  } else {
    for (i = 0; i < len; i++) {
      if (false === fn.call(ctx, arr[i], i, arr)) {
        return arr;
      }
    }
  }

  return arr;
};