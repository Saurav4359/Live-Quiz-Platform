const z = require("zod");
const signup = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
  role: z.string(),
});

const signin = z.object({
  email: z.email(),
  password: z.string().min(4).max(15),
});
module.exports = {
  signup,
  signin,
};
