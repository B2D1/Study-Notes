/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  function sum(n) {
    return n
      .toString()
      .split('')
      .reduce((acc, cur) => acc + cur ** 2, 0);
  }

  // 用个对象来记录出现过的值, 一旦再次出现就说明是无限循环了,
  //   const m = new Map();
  //   let happy;
  //   while (true) {
  //     happy = sum(n);

  //     if (happy === 1) {
  //       return true;
  //     } else {
  //       if (m.has(happy)) {
  //         return false;
  //       } else {
  //         m.set(happy, 1);
  //       }
  //     }
  //     n = happy;
  //   }
  // 快慢指针
  let slow = sum(n),
    fast = sum(slow);
  while (true) {
    if (slow === fast) {
      return fast === 1 ? true : false;
    } else {
      slow = sum(slow);
      fast = sum(sum(fast));
    }
  }
};

s = isHappy(19);
s;
