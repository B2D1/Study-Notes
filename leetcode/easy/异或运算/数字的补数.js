/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // toString() 可以将十进制转为其它进制的字符串形式
  // 补数 = 一个2进制数 与 对应位数全为1的2进制数 异或
  return parseInt(new Array(num.toString(2).length).fill(1).join(''), 2) ^ num;
};

// 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。
s = findComplement(5);
s; // 2
