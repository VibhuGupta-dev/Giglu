import { Request, Response } from "express";
import Gigmodel, { Giginterface } from "../../models/Gigmodel.js";
import userModel from "../../models/userModel.js";

export async function Gigadd(req: Request, res: Response) {
  try {
    const {
      GigTitle,
      GigDescription,
      GigPrice,
      GigLocation,
      ExpireDateAndTime,
    } : Giginterface = req.body
   const userid = req.user
   
   if(!userid) {
    return res.status(402).json({message : "Login first before adding gig"})
   }
    if (!GigTitle || !GigDescription || !GigLocation || !GigPrice || !ExpireDateAndTime) {
        return res.status(402).json({message : "full data is not given"})
    }
    const user = await userModel.findById({userid})
    if(user?.isContact === false) {
      return res.status(403).json({message : "you need give contact first"})
    }
    const creategig = await Gigmodel.create({
      GigTitle : GigTitle,
      GigDescription : GigDescription,
      GigPrice : GigPrice,
      GigLocation : GigLocation,
      ExpireDateAndTime
    })

    if(!creategig) {
      return res.status(400).json({message : "Gig can not be created"})
    }

    return res.status(200).json({message : "Gig created" , creategig})
  } catch (err) {
    return res.status(500).json({message : "network error in adding gig"})
  }
}
