interface error_message {
    success: false;
    error: string;
}
export declare const errors: (code: number, message?: string) => error_message;
interface IResponse {
    success: true;
    data: object;
}
export declare const response: (data: object) => IResponse;
export {};
//# sourceMappingURL=error.d.ts.map