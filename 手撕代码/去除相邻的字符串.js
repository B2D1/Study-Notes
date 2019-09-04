// 字符串去除相邻的重复项 如：'aabbccddeexxxxaa' => 'abcdexa'

const handle = str => {
    let arr = str.split('');
    let newArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== newArr[newArr.length - 1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr.join('');
};

const res = handle('aabbccddeexxxxaa');
console.log(res);
