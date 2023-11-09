
import { isAuthenticated } from "../middlewares/auth.js"

import express from "express"
import { getMyProfile, userLogin, userLogout, userRegister } from "../controllers/userController.js"
const router=express.Router()
router.post("/register",userRegister)
router.post("/login",userLogin)

router.get("/logout",userLogout)
router.get("/myprofile",isAuthenticated,getMyProfile)

export default router;