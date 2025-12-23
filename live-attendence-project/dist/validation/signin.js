import { z } from "zod";
export const signin = z.object({
    email: z.string().email(),
    password: z.string().min(5),
});
//# sourceMappingURL=signin.js.map