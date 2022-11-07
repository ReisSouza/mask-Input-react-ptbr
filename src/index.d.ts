import { MaskInputProps } from './types';

export declare const cpfMask: (value:string) => string;
export declare const cnpjMask: (value:string) => string;
export declare const phoneMask: (value:string) => string;
export declare const removeMask: (value) => string;
export declare const cpfOrCnpjMask: (value:string) => string;
export declare const postalCodeMask: (value:string) => string;
export declare const currencyMask: (value:string) => string;
export declare const rgMask: (value:string) => string;
export declare const setMask: ({ value, type, prefix }: MaskInputProps) => string;
