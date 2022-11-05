"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removerMask = ({ value, isCurrency }) => {
    if (isCurrency) {
        return Number(value).toFixed(2);
    }
    return value.replace(/[^a-z0-9]/gi, '');
};
exports.default = removerMask;
