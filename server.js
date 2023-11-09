import express from "express"
import mongoose from "mongoose"

const app=express()
mongoose.connect("mongodb+srv://prabhatkumarmnnit:MOk1moM1vGV9xlXq@mernproject.ryclxt8.mongodb.net/",{dbName:"MernProject"}).then(()=>console.log("mongodb is connected .."))

app.get("/",(req,res)=>{
    res.send("Hello world")
}
)


const port=4000

app.listen(port,()=>console.log(`server is running on ${port}`))