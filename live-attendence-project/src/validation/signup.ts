import { z } from "zod";

const signup = z.object({
  name: z.string().trim().min(1),
  email: z.string().email(),
  password: z.string().min(5),
//   password : z.string().min(8).regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$?&%*])[A-Za-z0-9@#$?&%*]{8,100}$/), 
  role: z.enum(["teacher", "student"]),
});

 
