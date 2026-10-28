import express  from "express";
import { Gigadd } from "../controller/GigController/Gigadd.js";
import { GetALLGig } from "../controller/GigController/GetAllGig.js";
import { isloggedin } from "../middleware/IsLoggedIn.js";

const router = express.Router();

router.get("/api/getallgig", GetALLGig);
router.post("/api/addgig" , isloggedin ,  Gigadd )

export default router;