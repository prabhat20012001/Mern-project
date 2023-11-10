import express from "express"
import { isAuthenticated } from "../middlewares/auth.js";
const router=express.Router();
import { createBlog,myBlog,updateBlog,deleteBlog } from "../controllers/blogController.js";

// router.post("/new"),
router.post("/new",isAuthenticated,createBlog)
router.get("/myblogs",isAuthenticated,myBlog)
router.put("/:id",isAuthenticated,updateBlog)
router.delete("/:id",isAuthenticated,deleteBlog)



export default router;