import { Blog } from "../models/blogModel.js";
export const createBlog=async(req,res)=>{
    const {title,description,imgUrl}=req.body
    await Blog.create({
    title,
    description,
    imgUrl,
    user:req.user
})
res.status(201).json({
    success:true,
    message:"blog added successfully",
    
})

}

export const myBlog=async(req,res)=>{
  const userid=req.user._id
  const blogs=await Blog.find({user:userid})
  res.status(200).json({
    success:true,
    blogs
})
}


export const updateBlog=async(req,res)=>{
const id=req.params.id;
const blogs=await Blog.findById(id)


    res.status(200).json({
        success:true,
        blogs
    })
}

export const deleteBlog=(req,res)=>{
    res.json({
        success:true
    })
}

