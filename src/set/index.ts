import {
  cnpjMask,
  cpfMask,
  cpfOrCnpjMask,
  currencyMask,
  phoneMask,
  postalCodeMask,
} from '../mask';
import { MaskInputProps, MaskProps } from '../types';

const setMask = ({ value, type }: MaskInputProps):string => {
  const asMaskSelect:Record<MaskProps, string> = {
    cnpj: cnpjMask(value),
    cpf: cpfMask(value),
    cpfOurCnpj: cpfOrCnpjMask(value),
    phone: phoneMask(value),
    postalCode: postalCodeMask(value),
    currency: currencyMask(value),
  };
  return asMaskSelect[type];
};

export default setMask;
