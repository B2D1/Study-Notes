// 不用循环，创建一个长度为 100 的数组，并且每个元素的值等于它的下标。
const arr1 = new Array(100).fill().map((_, i) => i);
const arr2 = [...new Array(100).keys()];

function createArray(len, arr = []) {
    if (len > 0) {
        arr[--len] = len;
        createArray(len, arr);
    }
    return arr;
}
