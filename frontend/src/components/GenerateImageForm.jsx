import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import { CircularProgress } from "@mui/material"
import Button from "./Button";
import { AutoAwesome } from '@mui/icons-material'
import { CreateRounded } from "@mui/icons-material";
import { genImg, createPost } from "../api";
export default function GenerateImageForm({ post, setPost, createPostLoading, setCreatePostLoading, generateImageLoading, setGenerateImageLoading }) {
  const navigate=useNavigate()
  const generateImageFun = async (e) => {
    e.preventDefault();
    setGenerateImageLoading(true);
    if (!post?.prompt || post.prompt.trim() === "") {
      alert("Please enter a prompt before generating an image.");
      setGenerateImageLoading(false);
      return;
    }
    try {
      console.log("Sending prompt:", post.prompt);
      const res = await genImg({ prompt: post.prompt });

      setPost({
        ...post,
        photo: `data:image/jpeg;base64,${res?.data?.photo}`,
      });
    } catch (error) {
      console.error("Image Generation Error:", error);
      alert("Image generation failed. Try again.");
    } finally {
      setGenerateImageLoading(false);
    }
  };
  const createPostFun = async (e) => {
    e.preventDefault();
    setCreatePostLoading(true);
    try {
      await createPost(post);
      setCreatePostLoading(false);
      navigate('/')
      console.log("hi");
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      { createPostLoading ?<div className="pt-50 flex items-center gap-5">
      <CircularProgress />
      <span className="text-white text-3xl animate-pulse tracking-wider">Posting your image...</span>
      </div>:
      <form action="" className="flex flex-col gap-10 items-center h-[600px] justify-center  ">
        <label htmlFor="" className="text-white text-2xl font-bold">Write your prompt to the image you want to create</label>
        <input type="text" onChange={(e) => setPost({ ...post, name: e.target.value })} value={post?.name} placeholder="Enter your name... " className="w-full max-w-md px-5 py-3 rounded-2xl bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-md" />
        <div className="flex flex-col w-full gap-1 items-center">
          <textarea rows="4" onChange={(e) => setPost({ ...post, prompt: e.target.value })} value={post?.prompt} placeholder="Write a prompt... " className="w-full max-w-md px-5 py-3 rounded-2xl bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-md" />
          <div className="text-gray-400 text-sm ">You can post the AI generated image to the Community</div>
        </div>
        <div className="flex  gap-5">
          <Button text=" Generate Image" icon={<AutoAwesome />} handleButton={generateImageFun} />
          <Button text=" Post Image" icon={<CreateRounded />} handleButton={createPostFun} />
        </div>
      </form>
}
   </>

  )
}
