import express from "express"
import { isAuthenticated } from "../middlewares/auth.js";
const router=express.Router();
import { createBlog,myBlog,updateBlog,deleteBlog ,getallBlogs} from "../controllers/blogController.js";

// router.post("/new"),
router.post("/new",isAuthenticated,createBlog)
router.get("/myblogs",isAuthenticated,myBlog)
router.put("/:id",isAuthenticated,updateBlog)
router.delete("/:id",isAuthenticated,deleteBlog)
router.get("/allblogs",getallBlogs)


export default router;