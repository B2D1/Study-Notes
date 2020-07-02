/**
 * https://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php
 * @param {number[]} arr
 */
let bubbleSort = function (arr) {
  let n = arr.length - 1,
    swap;
  do {
    swap = false;
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
    n--;
  } while (swap);
  return arr;
};

console.log(bubbleSort([6, 5, 4, 3, 2, 1, 0]));
