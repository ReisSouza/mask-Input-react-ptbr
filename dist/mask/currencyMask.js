"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currencyMask = ({ options, text }) => {
    const newCurrency = new Intl.NumberFormat((options === null || options === void 0 ? void 0 : options.locale) || 'pt-BR', Object.assign({ currency: (options === null || options === void 0 ? void 0 : options.currency) || 'BRL', style: (options === null || options === void 0 ? void 0 : options.style) || 'currency' }, options)).format(Number(text.replace(/\D/g, '')));
    return newCurrency;
};
exports.default = currencyMask;
