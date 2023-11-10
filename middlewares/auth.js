import jwt from 'jsonwebtoken';
import { User } from "../models/userModel.js"
export const isAuthenticated=async(req,res,next)=>{
    const {token}=req.cookies
    console.log(token)
    if(!token) return res.status(404).json({
        success:false,
        message:"Please login .....!"
    }
    )
    const decode=jwt.verify(token,"secret")
    req.user=await User.findById(decode._id)
next()    
    }