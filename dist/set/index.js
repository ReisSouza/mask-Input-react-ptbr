"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mask_1 = require("../mask");
const setMask = ({ value, type }) => {
    const asMaskSelect = {
        cnpj: (0, mask_1.cnpjMask)(value),
        cpf: (0, mask_1.cpfMask)(value),
        cpfOurCnpj: (0, mask_1.cpfOrCnpjMask)(value),
        phone: (0, mask_1.phoneMask)(value),
        postalCode: (0, mask_1.postalCodeMask)(value),
        currency: (0, mask_1.currencyMask)(value),
    };
    return asMaskSelect[type];
};
exports.default = setMask;
