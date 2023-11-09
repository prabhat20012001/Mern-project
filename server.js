import express from "express"

const app=express()

app.get("/",(req,res)=>{
    res.send("Hello world")
}
)


const port=4000

app.listen(port,()=>console.log(`server is running on ${port}`))