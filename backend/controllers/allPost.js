import cloudinary from 'cloudinary';
const { v2: cloudinaryV2 } = cloudinary;

import Post from  "../models/post.js";


export const allPost=async (req,res)=>{
try {
    const posts=await Post.find({});
    return res.status(200).json({success:true,data:posts})
} catch (error) {
    return res.status(500).json({error:error});
}
}