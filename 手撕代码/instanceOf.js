function instanceOf(left, right) {
    let prototype = right.prototype;
    let proto = left.__proto__;
    while (true) {
        if (proto === prototype) return true;
        if (proto === null) return false;
        proto = proto.__proto__;
    }
}

var arr = [1, 2, 3];
console.log(instanceOf(arr, Function));
