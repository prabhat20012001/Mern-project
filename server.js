import express from "express"
import mongoose from "mongoose"
import jsonParser from "json-parser"
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

    const user=await User.create({
        name,email,password
    })
    res.json({
        success:"user created"
    })
})


app.get("/api/users/getUser",async(req,res)=>{
    const user=await User.find()
    res.send(user)

})

const port=4000

app.listen(port,()=>console.log(`server is running on ${port}`))