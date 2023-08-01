"use strict";
// Напишите функцию, которая создаёт пространство имён. На вход подаётся строка вида: a.b.c.d.e, на выходе — вложенные друг в друга объекты.
Object.defineProperty(exports, "__esModule", { value: true });
var namespace = function (value) {
    var result = {};
    value.split(".").reduce(function (obj, key) {
        return (obj[key] = obj[key] || {});
    }, result);
    return result;
};
namespace("a.b.c.d.e"); // {a:{b:{c:{d:{e:{}}}}}}
exports.default = namespace;
