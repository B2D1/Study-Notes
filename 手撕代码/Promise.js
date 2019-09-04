class _Promise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        let resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        };
        let reject = reason => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(rr);
        }
    }
    then(onFulfilled, onRejected) {
        var newPromise = new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    const res = onFulfilled(this.value);
                    resolvePromise(res, resolve, reject);
                });
            }
            if (this.state === 'rejected') {
                setTimeout(() => {
                    const res = onRejected(this.reason);
                    resolvePromise(res, resolve, reject);
                });
            }
            if (this.state === 'pending') {
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        const res = onFulfilled(this.value);
                        resolvePromise(res, resolve, reject);
                    });
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        const res = onRejected(this.reason);
                        resolvePromise(res, resolve, reject);
                    });
                });
            }
        });
        return newPromise;
    }
}

function resolvePromise(param, resolve, reject) {
    if (param !== null && typeof param === 'object') {
        let then = param.then;
        if (typeof then === 'function') {
            then.call(
                param,
                val => {
                    resolvePromise(val, resolve, reject);
                },
                err => {
                    reject(err);
                }
            );
        } else {
            resolve(param);
        }
    } else {
        resolve(param);
    }
}

const p1 = new _Promise((resolve, reject) => {
    resolve(111);
});

const p2 = new _Promise((resolve, reject) => {
    resolve(222);
});

p1.then(res1 => {
    console.log(res1);
    return p2;
}).then(res2 => console.log(res2));

console.log(2);
