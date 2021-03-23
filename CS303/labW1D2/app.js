/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";
// See tests.js for behavior
function nameString(obj) {
    if (obj == 0) {
        return "object has no properties";
    }
    if (obj === undefined) {
        return "no object passed";
    } else if (obj === null) {
        return "null argument"
    } else if (obj !== 0) {
        let arr = [];
        for (let elem in obj) {
            arr.push(elem);
        }
        arr.sort();
        return arr.join(".");
    }
}
