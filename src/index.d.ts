import { MaskInputProps, CurrentType } from './types';

export declare const cpfMask: (value:string) => string;
export declare const cnpjMask: (value:string) => string;
export declare const phoneMask: (value:string) => string;
export declare const removeMask: (value:string) => string;
export declare const cpfOrCnpjMask: (value:string) => string;
export declare const postalCodeMask: (value:string) => string;
export declare const currencyMask: ({ options, value }:CurrentType) => string;
export declare const setMask: ({ text, type, options }: MaskInputProps) => string;
