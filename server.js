import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser"
const app=express()

app.use(express.json());
app.use(cookieParser())
mongoose.connect("mongodb+srv://prabhatkumarmnnit:MOk1moM1vGV9xlXq@mernproject.ryclxt8.mongodb.net/",{dbName:"MernProject"}).then(()=>console.log("mongodb is connected .."))

app.use("/api/users",userRouter)
const port=4000

app.listen(port,()=>console.log(`server is running on ${port}`))