"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const phoneMask = (value) => value
    .replace(/\D/g, '')
    .replace(/(\d{0})(\d)/, '$1($2')
    .replace(/(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{1})(\d+?$)/, '$1 $2')
    .replace(/(\d{4})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
exports.default = phoneMask;
