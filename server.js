import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser"
import blogRoutes from "./routes/blog.js"
const app=express()

app.use(express.json());
app.use(cookieParser())
mongoose.connect("mongodb+srv://prabhatkumarmnnit:MOk1moM1vGV9xlXq@mernproject.ryclxt8.mongodb.net/",{dbName:"MernProject"}).then(()=>console.log("mongodb is connected .."))

// user router
app.use("/api/users",userRouter)

// blog router
app.use("/api/blogs",blogRoutes)
const port=4000

app.listen(port,()=>console.log(`server is running on ${port}`))