/* 3.1 Создать новые методы для всех массивов (и вставить туда логгер с занятия 1, для 1000 повторений,
что бы показывал статистику для всех повторений):
* а) myForEach - тот же самый forEach
* б) myMap - тот же самый map
* в) mySort - тот же самый sort
* г) myFilter
* д) myPush  */

const timer = require('./timer');

const exampleArray = Array(100)
    .fill()
    .map (_ => Math.round(Math.random() * 1000));

Array.prototype.myForEach = function (callback, thisArg) {
    let array = thisArg || this;
    let length = array.length;
    for (let i = 0; i < length; i++) {
        callback(array[i], i, array);
    }
};

timer.time('myForEach', 'wrapper');
    exampleArray.myForEach(a => console.table(a));
timer.timeEnd('myForEach', 'wrapper');

Array.prototype.myMap = function (callback, thisArg) {
    let array = thisArg || this;
    let length = array.length;
    let results = [];
    for (let i = 0; i < length; i++) {
        results.push(callback.call(array[i], i, array));
    }
    return results;
};

timer.time('myMap', 'wrapper');
for (let i = 0; i <= 1000; i++) {
    exampleArray.myMap(a => a * a);
}
timer.timeEnd('myMap', 'wrapper');

Array.prototype.myFilter = function (callback, thisArg) {
    let array = thisArg || this;
    let length = array.length;
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

Array.prototype.mySort = function () {
    let array = this;
    let results = [];
    for (; array.length; ) {
        results.push(array.splice(array.indexOf(Math.min(...array)),1)[0]);
    }
    return results;
};

timer.time('mySort', 'wrapper');
console.log(exampleArray.mySort());
timer.timeEnd('mySort', 'wrapper');

Array.prototype.myPush = function () {
    let array = this;
    let length = arguments.length;
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