/* 3.1 Create new methods for the all arrays (and insert the logger there, from lesson 1, for 1000 repetitions -
        to show statistics for all that repetitions):
** a) myForEach - that same Array.forEach(),
** b) myMap - that same Array.map(),
** c) mySort - that same Array.sort(),
** d) myFilter - that same Array.filter(),
** e) myPush  - that same Array.push()
*/

const timer = require('./timer');

const exampleArray = Array(100)
    .fill()
    .map(_ => Math.round(Math.random() * 1000));

Array.prototype.myForEach = function (callback, thisArg) {
    const array = thisArg || this;
    const length = array.length;
    for (let i = 0; i < length; i++) {
        callback(array[i], i, array);
    }
};

timer.time('myForEach', 'wrapper');
exampleArray.myForEach(a => console.table(a));
timer.timeEnd('myForEach', 'wrapper');

Array.prototype.myMap = function (callback, thisArg) {
    const array = thisArg || this;
    const length = array.length;
    const results = [];
    for (let i = 0; i < length; i++) {
        results.push(callback.call(array, array[i]));
    }
    return results;
};

timer.time('myMap', 'wrapper');
for (let i = 0; i <= 1000; i++) {
    exampleArray.myMap(a => a * a);
}
timer.timeEnd('myMap', 'wrapper');

Array.prototype.myFilter = function (callback, thisArg) {
    const array = thisArg || this;
    const length = array.length;
    const results = [];
    for (let i = 0; i < length; i++) {
        callback.call(array[i], i, array);
        if (callback.call(array[i], i, array)) {
            results.push(array[i]);
        }
    }
    return results
};

timer.time('myFilter', 'wrapper');
for (let i = 0; i <= 1000; i++) {
    exampleArray.myFilter(n => n > 500);
}
timer.timeEnd('myFilter', 'wrapper');

Array.prototype.mySort = function (callback, thisArg) {
    const array = thisArg || this;
    const cb = (callback && typeof callback === 'function') ? callback : (a, b) => String(a) > String(b);
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (cb(array[j], array[j + 1])) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array;
};

timer.time('mySort', 'wrapper');
console.log(exampleArray.mySort());
timer.timeEnd('mySort', 'wrapper');

Array.prototype.myPush = function () {
    const array = this;
    const length = arguments.length;
    for (let i = 0; i < length; i++) {
        array[array.length] = arguments[i];
    }
    return array.length;
};

timer.time('myPush', 'wrapper');
for (let i = 0; i <= 1000; i++) {
    exampleArray.myPush(Math.round(Math.random() * 100));
}
timer.timeEnd('myPush', 'wrapper');

timer.logAll();
