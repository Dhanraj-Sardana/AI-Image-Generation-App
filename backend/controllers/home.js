import Post from '../models/post.js';
export const home=async (req,res)=>{
try {
    const posts = await Post.find();
    res.status(200).json(posts);
    
} catch (error) {
     console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
}
}