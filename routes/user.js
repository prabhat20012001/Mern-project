import express from "express"
import { User } from "../server.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const router=express.Router()



router.post("/register",async(req,res)=>{
    const {name,email,password}=req.body

    let user=await User.findOne({email});
    if(user)return res.status(404).json({
        success:false,
        message:"User Aleady exist.."
    })
    const hashPassword=await bcrypt.hash(password,10)
    user=await User.create({
        name,
        email,
        password:hashPassword
    })
   
    const token=jwt.sign({_id:user._id},"secret")

    res.status(201).cookie("token",token).json({
        success:true,
        message:"user registered successfully.."
    })
})

router.post("/login",async(req,res)=>{
    const {email,password}=req.body

    let user=await User.findOne({email});
    if(!user)return res.status(400).json({
        success:false,
        message:"User not exist.."
    })
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch)return res.status(400).json({
        success:false,
        message:"invalid credential"
    })

    const token=jwt.sign({_id:user._id},"secret")

    res.status(201).cookie("token",token,{
        httpOnly:true,
        maxAge:10*60*1000
    }).json({
        success:true,
        message:`welcome ${user.name}`
    })
})


export default router;