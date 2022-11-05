const removerMask = (value:string) => {
  if (value.includes('$' || 'R$' || '€' || '£' || '¥')) {
    return ((Number(value.replace(/[^0-9.-]+/g, '')) / (value.includes('R$') ? 100 : 1))).toFixed(2);
  }
  return value.replace(/[^a-z0-9]/gi, '');
};

export default removerMask;
