import { cnpjMask, cpfMask } from '.';

const cpfOurCnpj = (value: string) => {
  if (value.length <= 11) {
    return cpfMask(value);
  }
  return cnpjMask(value);
};

export default cpfOurCnpj;
