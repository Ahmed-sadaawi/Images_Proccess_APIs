"use strict";
/* بسم الله الرحمن الرحيم */
Object.defineProperty(exports, "__esModule", { value: true });
function welcome(_req, res, next) {
    res.send("You'er welcome to ==> IMAGES PROCCESSING APIs");
    next();
}
exports.default = welcome;
