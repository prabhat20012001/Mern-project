import express from "express"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import userRouter from "./routes/user.js"
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

export const User=mongoose.model("user",userSchema)

app.use("/api/users",userRouter)





const port=4000

app.listen(port,()=>console.log(`server is running on ${port}`))