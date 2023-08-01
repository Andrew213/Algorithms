"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var merge_1 = __importDefault(require("./merge"));
function set(object, path, value) {
    if (typeof path !== "string") {
        throw new Error("path must be string");
    }
    if (typeof object !== "object" || object === null) {
        return object;
    }
    return (0, merge_1.default)(object, path
        .split(".")
        .reduceRight(function (acc, key) {
        var _a;
        return (_a = {}, _a[key] = acc, _a);
    }, value));
}
exports.default = set;
