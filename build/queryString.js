"use strict";
/*
Реализуйте функцию, которая преобразует объект в строку в формате GET-запроса. Функция должна:
 - проверять, что на вход подали объект;
 - обрабатывать вложенные объекты;
 - если среди значений объекта есть массив, каждый элемент массива необходимо превращать в параметр;
 - проверять корректность входа — всегда ожидаем объект, иначе выбрасываем ошибку с текстом: 'input must be an object'.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var obj = {
    key: 1,
    key2: "test",
    key3: false,
    key4: true,
    key5: [1, 2, 3],
    key6: { a: 1 },
    key7: { b: { d: 2 } },
};
function queryStringify(data) {
    if (typeof data !== "object" || Array.isArray(data) || data === null) {
        throw new Error("input must be an object");
    }
    var params = [];
    var processObject = function (obj, prefix) {
        if (prefix === void 0) { prefix = ""; }
        var _loop_1 = function (key) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var value = obj[key];
                if (typeof value === "object" &&
                    value !== null &&
                    !Array.isArray(value)) {
                    processObject(value, prefix ? "".concat(prefix, "[").concat(key, "]") : key);
                }
                else if (Array.isArray(value)) {
                    value.forEach(function (item, index) {
                        params.push("".concat(prefix ? "".concat(prefix, "[").concat(key, "]") : key, "[").concat(index, "]=").concat(encodeURIComponent(item)));
                    });
                }
                else {
                    params.push("".concat(prefix ? "".concat(prefix, "[").concat(key, "]") : key, "=").concat(encodeURIComponent(value)));
                }
            }
        };
        for (var key in obj) {
            _loop_1(key);
        }
    };
    processObject(data);
    return params.join("&");
}
exports.default = queryStringify;
queryStringify(obj); // 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2'
