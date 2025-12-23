import { users } from "../models/Schema.js";
import { signup } from "../validation/signup.js";
import type { Response, Request } from "express";
import { errors, response } from "../utils/error.js";
import { signin } from "../validation/signin.js";
import { hash, password_check, token } from "../utils/jwt/bcrypt.js";

export const Signup = async (req: Request, res: Response) => {
  const { success, data, error } = signup.safeParse(req.body);
  if (!success) {
    return res.json(errors(400));
  }
  await users.create({
    name: data.name,
    email: data.email,
    password: await hash(data.password),
    role: data.role,
  });
  if (!users) {
    return res.json(errors(400));
  }
  res.status(200).json(response(data));
};

export const Signin = async (req: Request, res: Response) => {
  const { success, data, error } = signin.safeParse(req.body);
  if (!success) {
    return res.json(errors(400));
  }
  const existuser = await users.findOne({
    email: data.email,
  });
  if (existuser) {
    if (await password_check(data.password, existuser.password)) {
      const tokens=token({ userId: existuser._id, role: existuser.role });
      console.log(tokens);
      res
        .status(200)
        .json(response({tokens}));
    }
  } else return res.json(errors(400));
};
