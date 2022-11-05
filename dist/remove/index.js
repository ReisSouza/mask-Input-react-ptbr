"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removerMask = (text) => {
    if (text.includes('$' || 'R$' || '€' || '£' || '¥')) {
        return ((Number(text.replace(/[^0-9.-]+/g, '')) / (text.includes('R$') ? 100 : 1))).toFixed(2);
    }
    return text.replace(/[^a-z0-9]/gi, '');
};
exports.default = removerMask;
