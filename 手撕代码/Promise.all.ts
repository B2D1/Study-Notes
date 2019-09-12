function all<T>(arr: Promise<T>[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        let i = 0;
        let res = [];
        next();
        function next() {
            arr[i]
                .then((value: T) => {
                    res.push(value);
                    i++;
                    if (i < arr.length) {
                        next();
                    } else {
                        resolve(res);
                    }
                })
                .catch(reason => {
                    reject(reason);
                });
        }
    });
}

const p = function<T>(id: T, delay: number): Promise<T> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id);
        }, delay);
    });
};
const p2 = function<T>(id: T, delay: number): Promise<T> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(id);
        }, delay);
    });
};

const res = all<number>([p(1, 1500), p(2, 500), p(3, 1000)]);

res.then(value => console.log(value)).catch(reason => console.log(reason));
