/**
 * @param {Array} arr
 * @summary https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c
 */
function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i],
      j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(InsertionSort([5, 3, 1, 4, 6]));
