"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removerMask = (text) => text.replace(/[^a-z0-9]/gi, '');
exports.default = removerMask;
