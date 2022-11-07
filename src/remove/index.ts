const removerMask = (value:string) => {
  if (value.includes('$' || 'R$' || '€' || '£' || '¥')) {
    return Number(value.replace('R$', '').replace(',', '').replace('.', '').trim()).toFixed(2);
  }
  return value.replace(/[^a-z0-9]/gi, '');
};

export default removerMask;
