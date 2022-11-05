"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeMask = exports.postalCodeMask = exports.phoneMask = exports.currencyMask = exports.cpfOrCnpjMask = exports.cpfMask = exports.cnpjMask = exports.setMask = void 0;
const set_1 = __importDefault(require("./set"));
exports.setMask = set_1.default;
const remove_1 = __importDefault(require("./remove"));
exports.removeMask = remove_1.default;
const mask_1 = require("./mask");
Object.defineProperty(exports, "cnpjMask", { enumerable: true, get: function () { return mask_1.cnpjMask; } });
Object.defineProperty(exports, "cpfMask", { enumerable: true, get: function () { return mask_1.cpfMask; } });
Object.defineProperty(exports, "cpfOrCnpjMask", { enumerable: true, get: function () { return mask_1.cpfOrCnpjMask; } });
Object.defineProperty(exports, "currencyMask", { enumerable: true, get: function () { return mask_1.currencyMask; } });
Object.defineProperty(exports, "phoneMask", { enumerable: true, get: function () { return mask_1.phoneMask; } });
Object.defineProperty(exports, "postalCodeMask", { enumerable: true, get: function () { return mask_1.postalCodeMask; } });
console.log((0, set_1.default)({ text: '15779479755', type: 'cpf' }));
