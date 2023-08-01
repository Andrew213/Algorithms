"use strict";
function flatten(array) {
    var result = [];
    if (!Array.isArray(array)) {
        throw new Error("Argument must be an array");
    }
    array.forEach(function (value) {
        if (Array.isArray(value)) {
            result.push.apply(result, flatten(value));
        }
        else {
            result.push(value);
        }
    });
    return result;
}
