"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function listify(arr, type) {
    if (arr.length > 26)
        throw new Error(`Provided array, ${arr}, had a length of longer than 26.`);
    let i = 0;
    type === "Alpha" ? i = 65 : i = 0;
    const temp = [];
    for (i; i <= arr.length; i++) {
        temp.push(String.fromCharCode(i) + ". " + arr[i - 65]);
    }
    return temp;
}
exports.default = listify;
