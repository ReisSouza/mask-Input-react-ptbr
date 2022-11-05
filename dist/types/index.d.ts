export declare type MaskProps = 'cnpj' | 'cpf' | 'phone' | 'postalCode' | 'cpfOurCnpj' | 'currency';
export declare type OptionsCurremcy = Intl.NumberFormatOptions & {
    locale?: 'en-US' | 'pt-BR' | 'fr-FR' | 'it-IT' | 'pt-PT' | 'zh-CN' | 'ja-JP';
};
export declare type MaskInputProps = {
    type: MaskProps;
    value: string;
};
export declare type Record<K extends string, T> = {
    [P in K]: T;
};
export declare type RemoveMaskProps = {
    value: string;
    isCurrency: boolean;
};
