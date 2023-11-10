import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser"
import blogRoutes from "./routes/blog.js"
import { config } from "dotenv"
const app=express()

app.use(express.json());
app.use(cookieParser())
config({
    path:"./data/config.env"
})
mongoose.connect(process.env.MONGO_URL,{dbName:"MernProject"}).then(()=>console.log("mongodb is connected .."))

// user router
app.use("/api/users",userRouter)

// blog router
app.use("/api/blogs",blogRoutes)
const port=4000

app.listen(process.env.PORT,()=>console.log(`server is running on ${process.env.PORT}`))