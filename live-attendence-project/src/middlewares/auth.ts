import { payload } from "../utils/bcrypt.js";

import type { Request, Response, NextFunction } from "express";
import { errors } from "../utils/error.js";

export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string | undefined = req.headers["authorization"];
  if (typeof token !== "string") {
    return res.json(errors(401));
  }
  try {
    const decode = payload(token);
    if (!decode) {
      return res.json(errors(401));
    }
    req.userId = decode.userId;
    next();
  } catch (e) {
    return res.json(errors(401));
  }
};
