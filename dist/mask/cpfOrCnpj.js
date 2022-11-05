"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const cpfOurCnpj = (value) => {
    if (value.length <= 11) {
        return (0, _1.cpfMask)(value);
    }
    return (0, _1.cnpjMask)(value);
};
exports.default = cpfOurCnpj;
