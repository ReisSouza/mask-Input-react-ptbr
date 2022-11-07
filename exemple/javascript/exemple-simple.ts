import {
  cpfMask, cnpjMask, cpfOurCnpjMask, credCardMask, currencyMask, phoneMask, postalCodeMask, rgMask,
} from '../../src';

const cpf = cpfMask('00000000000');
const cnpj = cnpjMask('00000000000000');
const cpfOurCnpj1 = cpfOurCnpjMask('00000000000');
const cpfOurCnpj2 = cpfOurCnpjMask('00000000000000');
const currency = currencyMask('00000000000');
const phone = phoneMask('00000000000');
const postalCode = postalCodeMask('00000000000');
const rg = rgMask('000000000');
const credCard = credCardMask('0000000000000000');

console.log({
  cpf, cnpj, cpfOurCnpj1, cpfOurCnpj2, currency, phone, postalCode, rg, credCard,
});
