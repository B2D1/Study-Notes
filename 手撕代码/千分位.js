function handler(num) {
    const str = `${num}`;
    const len = str.length;
    let newStr = '';
    let count = 0;
    for (let i = len - 1; i >= 0; i--) {
        newStr = str[i] + newStr;
        count++;
        if (count === 3 && i !== 0) {
            newStr = ',' + newStr;
            count = 0;
        }
    }
    return newStr;
}

const res = handler(201605021504);
console.log(res);
