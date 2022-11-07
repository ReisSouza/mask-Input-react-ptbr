"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removerMask = (value) => {
    if (value.includes('$' || 'R$' || '€' || '£' || '¥')) {
        return Number(value.replace('R$', '').replace(',', '').replace('.', '').trim()).toFixed(2);
    }
    return value.replace(/[^a-z0-9]/gi, '');
};
exports.default = removerMask;
