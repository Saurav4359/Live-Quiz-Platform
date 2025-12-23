export declare const hash: (password: string) => Promise<string>;
export declare const password_check: (password: string, hash: string) => Promise<boolean>;
export declare const token: (payload: object) => string;
//# sourceMappingURL=bcrypt.d.ts.map