import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { string } from "zod";
const jwt_key = "fuewgifug3r3";
export const hash = async (password: string) => {
  return await bcrypt.hash(password, 10);
};
export interface JwtPayload {
  userId: string;
  role: string;
  iat?: number;
  exp?: number;
}
export const password_check = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export const token = (payload: object | string) => {
  if (typeof payload === "string") payload = JSON.parse(payload);
  return jwt.sign(payload, jwt_key);
};

export const payload = (token: string): JwtPayload => {
  return jwt.verify(token, jwt_key) as JwtPayload;
};
