"use strict";
/*
генерирует числовые последовательности с заданным шагом.
 * range(4); // => [0, 1, 2, 3]
 * range(-4); // => [0, -1, -2, -3]
 * range(1, 5); // => [1, 2, 3, 4]
 * range(0, 20, 5); // => [0, 5, 10, 15]
 * range(0, -4, -1); // => [0, -1, -2, -3]
 * range(1, 4, 0); // => [1, 1, 1]
 * range(0); // => []
 */
function range(start, end, step) {
    var result = [];
    var length = Math.abs(start);
    if (end) {
        length = (end - start) / (step || 1);
    }
    if (!step) {
        for (var i = 0, k = 0; i < length; i++, start < 0 ? k-- : k++) {
            result[i] = k;
        }
        return result;
    }
    for (var i = 0, k = start; i < length; i++, k += step) {
        result[i] = k;
    }
    return result;
}
