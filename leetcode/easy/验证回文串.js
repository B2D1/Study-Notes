/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s === '') return true;
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // 也可以使用 /\W/ 匹配非 字母、数字、下划线。等价于 '[^A-Za-z0-9_]'
  return s.split('').reverse().join('') === s;
  // 双指针收尾字符逐个比对，一旦有一个不相等的就说明不是回文了
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
