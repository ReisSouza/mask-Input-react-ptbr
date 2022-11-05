export type MaskProps = 'cnpj' | 'cpf' | 'phone' | 'postalCode' | 'cpfOurCnpj' | 'currency';

export type OptionsCurremcy = Intl.NumberFormatOptions & {
  locale?:'en-US' | 'pt-BR' | 'fr-FR' | 'it-IT' | 'pt-PT' | 'zh-CN' | 'ja-JP'
}

export type MaskInputProps = {
  type: MaskProps;
  value: string;
};

export type Record<K extends string, T> = {
  [P in K]: T;
};

export type RemoveMaskProps = {
  value:string;
  isCurrency:boolean;
}
