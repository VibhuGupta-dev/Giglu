import type { Request, Response } from "express";
import Gigmodel from "../../models/Gigmodel.js";

export async function GetALLGig(_req: Request, res: Response) {
  try {
    const gigs = await Gigmodel.find();
    return res.status(200).json(gigs);
  } catch (err) {
    console.error("Error fetching gigs:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}