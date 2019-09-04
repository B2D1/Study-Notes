const binarySearch = (arr, target, start, end) => {
    let pivot = Math.floor((start + end) / 2);
    let pivotValue = arr[pivot];
    if (pivotValue === target) return pivot;
    if (pivotValue > target) {
        return binarySearch(arr, target, 0, pivot - 1);
    }
    if (pivotValue < target) {
        return binarySearch(arr, target, pivot + 1, end);
    }
    return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7, 0, 7));
