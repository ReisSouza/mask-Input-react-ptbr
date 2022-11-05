"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpfMask = void 0;
const cnpjMask = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{4})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};
const telMask = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{0})(\d)/, "$1($2")
    .replace(/(\d{2})(\d)/, "$1) $2")
    .replace(/(\d{1})(\d+?$)/, "$1 $2")
    .replace(/(\d{4})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
};
const cpfMask = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};
exports.cpfMask = cpfMask;
const maskInput = ({ type, value }) => {
  switch (type) {
    case "cnpj": {
      return cnpjMask(value);
    }
    case "cpf": {
      return (0, exports.cpfMask)(value);
    }
    case "tel": {
      return telMask(value);
    }
  }
};
