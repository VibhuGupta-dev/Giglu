import express from 'express'
//import { SignIn } from '../controller/Authcontroller/SignInController.js'
import { SignUp } from '../controller/Authcontroller/SignUpController.js'
const router = express.Router()

//router.post("/api/signin" , SignIn)
router.post("/api/signup" , SignUp)

export default router