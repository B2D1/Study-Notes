/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // 模拟加法
  if (a.length > b.length) {
    b = b.padStart(a.length, '0');
  } else {
    a = a.padStart(b.length, '0');
  }
  var step = 0,
    s = '',
    i = a.length - 1,
    rest,
    sum;
  while (i >= 0) {
    sum = ~~a[i] + ~~b[i] + step;
    step = ~~(sum / 2);
    rest = sum % 2;
    s = rest + s;
    i--;
  }
  return step ? step + s : s;
  // BigInt
  // return (BigInt('Ob'+ a) + BigInt('Ob'+ b)).toString(2);
};

s = addBinary('1010', '1011');
s;
