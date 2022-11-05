"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyMask = exports.cpfOrCnpjMask = exports.postalCodeMask = exports.phoneMask = exports.cpfMask = exports.cnpjMask = void 0;
var cnpjMask_1 = require("./cnpjMask");
Object.defineProperty(exports, "cnpjMask", { enumerable: true, get: function () { return __importDefault(cnpjMask_1).default; } });
var cpfMask_1 = require("./cpfMask");
Object.defineProperty(exports, "cpfMask", { enumerable: true, get: function () { return __importDefault(cpfMask_1).default; } });
var phoneMask_1 = require("./phoneMask");
Object.defineProperty(exports, "phoneMask", { enumerable: true, get: function () { return __importDefault(phoneMask_1).default; } });
var postalCode_1 = require("./postalCode");
Object.defineProperty(exports, "postalCodeMask", { enumerable: true, get: function () { return __importDefault(postalCode_1).default; } });
var cpfOrCnpj_1 = require("./cpfOrCnpj");
Object.defineProperty(exports, "cpfOrCnpjMask", { enumerable: true, get: function () { return __importDefault(cpfOrCnpj_1).default; } });
var currencyMask_1 = require("./currencyMask");
Object.defineProperty(exports, "currencyMask", { enumerable: true, get: function () { return __importDefault(currencyMask_1).default; } });
