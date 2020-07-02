/**
 * https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c
 * @param {number[]} arr
 */
function insertionSort(arr) {
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

console.log(insertionSort([5, 3, 1, 4, 6]));
