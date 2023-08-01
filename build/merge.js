"use strict";
/*
Напишите функцию, которая объединит два объекта с сохранением их уникальных ключей.
Порядок ключей важен.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function merge(lhs, rhs) {
    var result = __assign({}, lhs);
    for (var key in rhs) {
        if (typeof rhs[key] === "object" && typeof lhs[key] === "object") {
            result[key] = merge(lhs[key], rhs[key]);
        }
        else {
            result[key] = rhs[key];
        }
    }
    return result;
}
exports.default = merge;
merge({ a: { b: { a: 2 } }, d: 5 }, { a: { b: { c: 1 } } });
/*
{
    a: {
        b: {
            a: 2,
            c: 1,
        }
    },
    d: 5,
}
*/
