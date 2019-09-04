const insertSort = arr => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
        }
    }
    return arr;
};
const quickSort = arr => {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = Math.floor(arr.length / 2);
    const pivotValue = arr.splice(pivot, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > pivotValue) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    return [...quickSort(left), pivotValue, ...quickSort(right)];
};
const chooseSort = arr => {
    const len = arr.length;
    let minIndex;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
};
const bubbleSort = arr => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

console.log(insertSort([-99, 2, 100, 9999, 3, 5, 1, 56, -9999]));
console.log(chooseSort([-99, 2, 100, 9999, 3, 5, 1, 56, -9999]));
console.log(bubbleSort([-99, 2, 100, 9999, 3, 5, 1, 56, -9999]));
console.log(quickSort([-99, 2, 100, 9999, 3, 5, 1, 56, -9999]));
