"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mask_1 = require("../mask");
const setMask = ({ text, type }) => {
    const asMaskSelect = {
        cnpj: (0, mask_1.cnpjMask)(text),
        cpf: (0, mask_1.cpfMask)(text),
        cpfOurCnpj: (0, mask_1.cpfOrCnpjMask)(text),
        phone: (0, mask_1.phoneMask)(text),
        postalCode: (0, mask_1.postalCodeMask)(text),
        currency: (0, mask_1.currencyMask)(text),
    };
    return asMaskSelect[type];
};
exports.default = setMask;
