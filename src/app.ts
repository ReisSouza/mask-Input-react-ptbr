const cnpjMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{4})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const cpfOurCnpj = (value: string) => {
  if (value.length <= 14) {
    return cpfMask(value);
  }
  return cnpjMask(value);
};

export const codeMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");
};

const telMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{0})(\d)/, "$1($2")
    .replace(/(\d{2})(\d)/, "$1) $2")
    .replace(/(\d{1})(\d+?$)/, "$1 $2")
    .replace(/(\d{4})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
};

type maskInputProps = {
  type: "cnpj" | "cpf" | "tel" | "code" | "cpfOurCnpj";
  value: string;
};
const maskInput = ({ type, value }: maskInputProps) => {
  switch (type) {
    case "cnpj": {
      return cnpjMask(value);
    }
    case "cpf": {
      return cpfMask(value);
    }
    case "tel": {
      return telMask(value);
    }
    case "code": {
      return codeMask(value);
    }
    case "cpfOurCnpj": {
      return cpfOurCnpj(value);
    }
  }
};


