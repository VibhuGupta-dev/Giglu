import type { Request, Response } from "express";
import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signin(req: Request, res: Response) {
  try {
    const { email, password }: { email: string; password: string } = req.body;

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const ACCESS_JWT = process.env.ACCESS_JWT;
    const REFRESH_JWT = process.env.REFRESH_JWT;

    if (!ACCESS_JWT || !REFRESH_JWT) {
      console.error("JWT secrets are missing");

      return res.status(500).json({
        message: "Internal server error",
      });
    }

    const userexist = await userModel.findOne({
      email: email.trim(),
    });

    if (!userexist) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const checkpass = await bcrypt.compare(password, userexist.password as string );

    if (!checkpass) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const userId = userexist._id.toString();

    const accesstoken = jwt.sign({ id: userId }, ACCESS_JWT, {
      expiresIn: "15m",
    });

    const refreshtoken = jwt.sign({ id: userId }, REFRESH_JWT, {
      expiresIn: "7d",
    });

    res.cookie("AccessToken", accesstoken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
      path: "/",
    });

    res.cookie("RefreshToken", refreshtoken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    return res.status(200).json({
      message: "Login successful",
    });
  } catch (err) {
    console.error("Signin error:", err);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}
