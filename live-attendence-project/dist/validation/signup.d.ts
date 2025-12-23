import { z } from "zod";
export declare const signup: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    role: z.ZodEnum<{
        teacher: "teacher";
        student: "student";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=signup.d.ts.map