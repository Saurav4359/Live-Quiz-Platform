import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const jwt_key= "fuewgifug3r3";
export const hash = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export const password_check = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export const token = (payload : object) => {
    return  jwt.sign({},jwt_key);
};
