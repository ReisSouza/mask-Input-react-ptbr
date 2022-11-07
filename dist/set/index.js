"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mask_1 = require("../mask");
const rgMask_1 = __importDefault(require("../mask/rgMask"));
const setMask = ({ value, type, prefix }) => {
    const asMaskSelect = {
        cnpj: (0, mask_1.cnpjMask)(value),
        cpf: (0, mask_1.cpfMask)(value),
        cpfOurCnpj: (0, mask_1.cpfOurCnpjMask)(value),
        phone: (0, mask_1.phoneMask)(value),
        postalCode: (0, mask_1.postalCodeMask)(value),
        currency: (0, mask_1.currencyMask)(value),
        rg: (0, rgMask_1.default)(value),
        credCard: (0, mask_1.credCardMask)(value),
    };
    const newValue = prefix ? `${prefix} ${asMaskSelect[type]}` : asMaskSelect[type];
    return newValue;
};
exports.default = setMask;
