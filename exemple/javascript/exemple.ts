import { removeMask, setMask } from '../../src';

export {
  setMask,
  removeMask,
};

const maskCPF = setMask({ type: 'cpf', value: '00000000000' });
const maskCNPJ = setMask({ type: 'cnpj', value: '00000000000000' });
const maskRG = setMask({ type: 'rg', value: '000000000' });
const maskPostCode = setMask({ type: 'postalCode', value: '000000000' });
const maskPhone = setMask({ type: 'phone', value: '000000000' });
const maskCPFORCNPJ1 = setMask({ type: 'currency', value: '00000000000' });
const maskCPFORCNPJ2 = setMask({ type: 'cpfOurCnpj', value: '00000000000000' });
const maskCredCard = setMask({ type: 'credCard', value: '0000000000000000' });
const maskCurrency = setMask({ type: 'cpfOurCnpj', value: '100000000' });

console.log({
  maskCPF,
  maskCNPJ,
  maskRG,
  maskPostCode,
  maskPhone,
  maskCurrency,
  maskCredCard,
  maskCPFORCNPJ1,
  maskCPFORCNPJ2,
});

const removeCPF = removeMask(maskCPF);
const removeCNPJ = removeMask(maskCNPJ);
const removeRG = removeMask(maskRG);
const removePostalCode = removeMask(maskPostCode);
const removePhone = removeMask(maskPhone);
const removeCurrency = removeMask(maskCurrency);
const removeCred = removeMask(maskCredCard);
const removeCPFORCNPJ1 = removeMask(maskCPFORCNPJ1);
const removeCPFORCNPJ2 = removeMask(maskCPFORCNPJ2);

console.log({
  removeCPF,
  removeCNPJ,
  removeRG,
  removePostalCode,
  removePhone,
  removeCurrency,
  removeCred,
  removeCPFORCNPJ1,
  removeCPFORCNPJ2,
});
