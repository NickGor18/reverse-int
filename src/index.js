module.exports = function reverse (n) {
  var str = String(n);
  var arr = str.split('');
  arr.reverse();
  str = arr.join('');
  return parseInt(str, 10);
}
