import {
  cnpjMask,
  cpfMask,
  cpfOurCnpjMask,
  credCardMask,
  currencyMask,
  phoneMask,
  postalCodeMask,
  obscureEmail,
  rgMask,
} from '../mask';
import { MaskInputProps, MaskProps } from '../types';

const setMask = ({ value, type, prefix }: MaskInputProps):string => {
  const asMaskSelect:Record<MaskProps, string> = {
    cnpj: cnpjMask(value),
    cpf: cpfMask(value),
    cpfOurCnpj: cpfOurCnpjMask(value),
    phone: phoneMask(value),
    postalCode: postalCodeMask(value),
    currency: currencyMask(value),
    rg: rgMask(value),
    credCard: credCardMask(value),
    obscureEmail: obscureEmail(value),
  };

  const newValue = prefix ? `${prefix} ${asMaskSelect[type]}` : asMaskSelect[type];
  return newValue;
};

export default setMask;
