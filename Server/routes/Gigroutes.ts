import express  from "express";
import { Gigadd } from "../controller/GigController/Gigadd.js";
import { isloggedin } from "../middleware/IsLoggedIn.js";

const router = express.Router();

router.post("/api/addgig" , isloggedin ,  Gigadd )

export default router;