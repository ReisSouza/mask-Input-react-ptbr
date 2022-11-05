export type MaskProps = 'cnpj' | 'cpf' | 'phone' | 'postalCode' | 'cpfOurCnpj' | 'currency';

export type OptionsCurremcyu = Intl.NumberFormatOptions & {
  locale?:'en-US' | 'pt-BR' | 'fr-FR' | 'it-IT' | 'pt-PT' | 'zh-CN' | 'ja-JP'
}

export type MaskInputProps = {
  type: MaskProps;
  text: string;
  options?:OptionsCurremcyu
};

export type Record<K extends string, T> = {
  [P in K]: T;
};

export type CurrentType = {
  value:string
  options?:OptionsCurremcyu
}
