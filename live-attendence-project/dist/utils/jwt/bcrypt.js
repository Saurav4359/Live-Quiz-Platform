import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const jwt_key = "fuewgifug3r3";
export const hash = async (password) => {
    return await bcrypt.hash(password, 10);
};
export const password_check = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
export const token = (payload) => {
    return jwt.sign({}, jwt_key);
};
//# sourceMappingURL=bcrypt.js.map