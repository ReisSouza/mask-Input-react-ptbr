"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const credCardMask = (value) => value
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
exports.default = credCardMask;
