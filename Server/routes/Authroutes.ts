import express from 'express'
import { SignUp } from '../controller/Authcontroller/SignUpController.js'
import { signin } from '../controller/Authcontroller/SignInController.js'
const router = express.Router()

router.post("/api/signup" , SignUp)
router.post("/spi/signin" , signin)

export default router