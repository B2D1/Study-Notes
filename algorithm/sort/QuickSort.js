/**
 * https://www.guru99.com/quicksort-in-javascript.html
 */
function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}

function swap(items, leftIndex, rightIndex) {
  const temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right) {
  const pivot = items[Math.floor((left + right) / 2)];
  let i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

var items = [5, 3, 7, 6, 2, 9];
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); // prints [2,3,5,6,7,9]
