import { CurrentType } from '../types';

const currencyMask = ({ options, text }:CurrentType) => {
  const newCurrency = new Intl.NumberFormat(options?.locale || 'pt-BR', { currency: options?.currency || 'BRL', style: options?.style || 'currency', ...options }).format(Number(text.replace(/\D/g, '')));
  return newCurrency;
};
export default currencyMask;
