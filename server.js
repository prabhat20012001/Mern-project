import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/user.js"
const app=express()

app.use(express.json());

mongoose.connect("mongodb+srv://prabhatkumarmnnit:MOk1moM1vGV9xlXq@mernproject.ryclxt8.mongodb.net/",{dbName:"MernProject"}).then(()=>console.log("mongodb is connected .."))

app.get("/",(req,res)=>{
    res.send("Hello world")
}
)




app.use("/api/users",userRouter)





const port=4000

app.listen(port,()=>console.log(`server is running on ${port}`))