import { users } from "../models/Schema.js";
import { signup } from "../validation/signup.js";
import { errors, response } from "../utils/error.js";
export const Signup = async (req, res) => {
    const { success, data, error } = signup.safeParse(req.body);
    if (!success) {
        return res.json(errors(400));
    }
    await users.create({
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
    });
    res.status(200).json(response(data));
};
//# sourceMappingURL=controller.js.map