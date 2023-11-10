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
    const {title,description,imageUrl}=req.body
const id=req.params.id;
const blogs=await Blog.findById(id)
if(!blog)return res.status(404).json({
    success:false,
    message:"invalid ID"
})
blog.title=title;
blog.description=description;
blog.imageUrl=imageUrl

    res.status(200).json({
        success:true,
        blogs
    })
}

export const deleteBlog=async(req,res)=>{
    const id=req.params.id;
const blog=await Blog.findById(id)
if(!blog)return res.status(404).json({
    success:false,
    message:"invalid ID"
})
await blog.deleteOne()
    res.json({
        success:true,
        message:"blog deleted"
    })
}

export const getallBlogs=async(req,res)=>{
const blogs=await Blog.find()
if(!blogs)return res.status(404).json({
    success:false,
    message:"There is no blog"
})
    res.json({
        success:true,
        message:"All blogs",
        blogs
    })
}


export const getBlogById=async(req,res)=>{
    const id=req.params.id
    const blog=await Blog.findById(id);
    if(!blog)return res.status(404).json({
        success:false,
        message:"Invalid ID"
    })

    res.json({
        success:true,
        message:"your blog",
        blog
    })
}