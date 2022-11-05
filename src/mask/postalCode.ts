const postalCodeMask = (value: string) => value
  .replace(/\D/g, '')
  .replace(/(\d{5})(\d)/, '$1-$2')
  .replace(/(-\d{3})\d+?$/, '$1');

export default postalCodeMask;
