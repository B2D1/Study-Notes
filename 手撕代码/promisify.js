// main.js
const fs = require('fs');
const readFile = promisify(fs.readFile); // 转换异步读取
function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn.apply(
                null,
                args.concat((err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                })
            );
        });
    };
}

readFile('./bind.js', 'utf8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
