import dotenv from 'dotenv';
dotenv.config();

import Post from '../models/post.js';
import cloudinary from 'cloudinary';


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

export const createPost = async (req, res) => {
  const { name, prompt, photo } = req.body;

  try {
    let base64Image = photo;
    if (!photo.startsWith("data:image")) {
      base64Image = `data:image/png;base64,${photo}`;
    }
    const photoUrl = await cloudinary.uploader.upload(base64Image);
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl?.secure_url,
    });

    return res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
