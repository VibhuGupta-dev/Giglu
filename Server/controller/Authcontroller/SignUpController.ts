import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import userModel, { User } from "../../models/userModel.js";

interface userData extends User {
  confirmPassword?: string;
}

export async function SignUp(req: Request, res: Response) {
  try {
    const { name, email, password, confirmPassword }: userData = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields must be filled" });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof confirmPassword !== "string"
    ) {
      return res.status(400).json({
        message: "Invalid input",
      });
    }

    const normalizedName = name.trim();
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedName) {
      return res.status(400).json({ message: "Name is required" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }

    if (password !== confirmPassword) {
      return res.status(403).json({ message: "Password doesnt match" });
    }

    const ACCESS_JWT = process.env.ACCESS_JWT;
    const REFRESH_JWT = process.env.REFRESH_JWT;

    if (!ACCESS_JWT || !REFRESH_JWT) {
      throw new Error("JWT secrets are missing in environment variables");
    }

    const checkemail = await userModel.findOne({ email: normalizedEmail });
    if (checkemail) {
      return res.status(403).json({ message: "Email already exist" });
    }

    const hash = await bcrypt.hash(password, 10);

    const createUser = await userModel.create({
      name: normalizedName,
      email: normalizedEmail,
      password: hash,
    });

    if (!createUser) {
      return res
        .status(400)
        .json({ message: "Cant create User at the moment" });
    }

    const accesstoken = jwt.sign(
      { id: createUser._id.toString() },
      ACCESS_JWT,
      { expiresIn: "15m" },
    );
    const refreshtoken = jwt.sign(
      { id: createUser._id.toString() },
      REFRESH_JWT,
      { expiresIn: "7d" },
    );

    res.cookie("AccessToken", accesstoken, {
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    res.cookie("RefreshToken", refreshtoken, {
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return res.status(201).json({
      message: "User Created Successfully",
      user: {
        email: createUser.email,
        userId: createUser._id,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
