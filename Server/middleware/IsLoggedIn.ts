import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
      };
    }
  }
}

export function isloggedin(req: Request, res: Response, next: NextFunction) {
  const accessJwt = process.env.ACCESS_JWT;

  if (!accessJwt) {
    console.error("ACCESS_JWT is missing");
    return res.status(500).json({ message: "Internal server error" });
  }

  const token = req.cookies?.AccessToken;
  if (!token) {
    return res.status(401).json({ message: "You need to log in first" });
  }

  try {
    const verified = jwt.verify(token, accessJwt);
    if (
      typeof verified === "string" ||
      typeof verified.id !== "string" ||
      !verified.id
    ) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.user = { userId: verified.id };
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
