"use strict";
/*
Напишите функцию, которая умеет удалять из начала и конца строки пробельные
или отдельно заданные пользовательские символы.
Удаление пробелов из начала и конца строк — поведение по умолчанию.
Пробел необязательно должен быть передан в качестве аргумента.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var trim = function (init, filter) {
    if (!filter) {
        return init.trim();
    }
    var initArray = init.split("");
    var filterArray = filter.split("");
    var resultArray = initArray.filter(function (el) { return !filterArray.some(function (fil) { return fil === el; }); });
    return resultArray.join("");
};
trim("  abc  "); // => 'abc'
trim("-_-abc-_-", "_-"); // => 'abc'
trim("\xA0foo"); // "foo"
trim("\xA0foo", " "); // " foo"
trim("-_-ab c -_-", "_-"); // ab c
["  foo  ", "  bar  "].map(function (value) { return trim(value); }); // => ['foo', 'bar']
exports.default = trim;
