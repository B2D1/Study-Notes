/**
 * https://medium.com/javascript-algorithms/javascript-algorithms-selection-sort-54da919d0513
 * @param {number[]} arr
 */
let selectionSort = function (arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([6, 5, 4, 3, 2, 1, 0]));
