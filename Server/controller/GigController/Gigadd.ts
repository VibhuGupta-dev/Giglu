import { Request, Response } from "express";
import { Giginterface } from "../../models/Gigmodel.js";

export async function Gigadd(req: Request, res: Response) {
  try {
    const {
      GigTitle,
      GigDescription,
      GigPrice,
      GigLocation,
      ExpireDateAndTime,
    } : Giginterface = req.body

    if (!GigTitle || !GigDescription || !GigLocation || !GigPrice || !ExpireDateAndTime) {
        return res.status(402).json({message : "full data is not given"})
    }
  } catch (err) {
    return res.status(500).json({message : "network error in adding gig"})
  }
}
