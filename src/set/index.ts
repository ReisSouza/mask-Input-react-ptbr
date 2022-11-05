import {
  cnpjMask,
  cpfMask,
  cpfOrCnpjMask,
  currencyMask,
  phoneMask,
  postalCodeMask,
} from '../mask';
import { MaskInputProps, MaskProps } from '../types';

const setMask = ({ text, type, options }: MaskInputProps):string => {
  const asMaskSelect:Record<MaskProps, string> = {
    cnpj: cnpjMask(text),
    cpf: cpfMask(text),
    cpfOurCnpj: cpfOrCnpjMask(text),
    phone: phoneMask(text),
    postalCode: postalCodeMask(text),
    currency: currencyMask({ text, options }),
  };
  return asMaskSelect[type];
};

export default setMask;
