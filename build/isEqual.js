"use strict";
/*
Напишите функцию, которая выполняет глубокое сравнение между двумя значениями и определяет — являются ли они эквивалентными.
Аргументами могут быть только объекты.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function isEqual(a, b) {
    for (var _i = 0, _a = Object.entries(a); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (typeof value !== "object" && value !== b[key]) {
            return false;
        }
        if (typeof value === "object") {
            isEqual(value, b[key]);
        }
    }
    return true;
}
var a = { a: 1 };
var b = { a: 1 };
isEqual(a, b); // true
exports.default = isEqual;
