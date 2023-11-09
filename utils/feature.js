
import jwt from "jsonwebtoken"
export const generateCookie=(user,res,statusCode=200,message)=>{
    
    const token=jwt.sign({_id:user._id},"secret")

    res.status(201).cookie("token",token,{
        httpOnly:true,
        maxAge:10*60*1000
    }).json({
        success:true,
        message
    })
}