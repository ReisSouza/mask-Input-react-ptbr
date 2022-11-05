import { RemoveMaskProps } from '../types';

const removerMask = ({ value, isCurrency }:RemoveMaskProps) => {
  if (isCurrency) {
    return Number(value).toFixed(2);
  }
  return value.replace(/[^a-z0-9]/gi, '');
};

export default removerMask;
