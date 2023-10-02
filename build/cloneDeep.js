"use strict";
// Напишите функцию, которая выполняет глубокое копирование значений.
Object.defineProperty(exports, "__esModule", { value: true });
function isArray(value) {
    return Array.isArray(value);
}
function isPlainObject(value) {
    return (typeof value === "object" &&
        value !== null &&
        value.constructor === Object &&
        Object.prototype.toString.call(value) === "[object Object]");
}
function cloneDeep(obj) {
    if (isArray(obj)) {
        return obj.map(function (el) { return cloneDeep(el); });
    }
    if (isPlainObject(obj)) {
        var cloneObj = {};
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                cloneObj[key] = cloneDeep(obj[key]);
            }
        }
        return cloneObj;
    }
    return obj;
}
var objects = [{ a: 1 }, { b: 2 }];
var deep = cloneDeep(objects);
// console.log(deep[0] === objects[0]); // => false
exports.default = cloneDeep;
