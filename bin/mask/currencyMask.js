"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currencyMask = (text) => text
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.');
exports.default = currencyMask;
