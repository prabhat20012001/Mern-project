import express from "express"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const app=express()

app.use(express.json());

mongoose.connect("mongodb+srv://prabhatkumarmnnit:MOk1moM1vGV9xlXq@mernproject.ryclxt8.mongodb.net/",{dbName:"MernProject"}).then(()=>console.log("mongodb is connected .."))

app.get("/",(req,res)=>{
    res.send("Hello world")
}
)

const userSchema=new mongoose.Schema({
name:{
    type:String,
    require:true
},
email:{
    type:String,
    unique:true,
    require:true
},
password:{
    type:String,
    require:true
},
createdAt:{
    type:Date,
    default:Date.now
}

})

const User=mongoose.model("user",userSchema)

app.post("/api/users/register",async(req,res)=>{
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


app.post("/api/users/login",async(req,res)=>{
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



const port=4000

app.listen(port,()=>console.log(`server is running on ${port}`))