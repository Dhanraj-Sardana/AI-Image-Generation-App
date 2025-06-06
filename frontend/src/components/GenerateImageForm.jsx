import { useEffect, useState } from "react"
import Button from "./Button";
import {AutoAwesome} from  '@mui/icons-material'
import { CreateRounded } from "@mui/icons-material";
export default function GenerateImageForm({post,setPost,createPostLoading,setCreatePostLoading,generateImageLoading,setGenerateImageLoading}) {
   const generateImageFun=(e)=>{
    e.preventDefault();
console.log("hi");
     setGenerateImageLoading(true);
   }
   const createPostFun=()=>{
    e.preventDefault();
    setCreatePostLoading(true);
    
   }
  return (
    <>
    
    <form action=""  className="flex flex-col gap-10 items-center h-[600px] justify-center  ">           
        <label htmlFor="" className="text-white text-2xl font-bold">Write your prompt to the image you want to create</label>
    <input type="text" onChange={(e)=>setPost({...post,author:e.target.value})} value={post?.author} placeholder="Enter your name... " className="w-full max-w-md px-5 py-3 rounded-2xl bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-md" />
       <div className="flex flex-col w-full gap-1 items-center">
        <textarea  rows="4" onChange={(e)=>setPost({...post,prompt:e.target.value})} value={post?.prompt} placeholder="Write a prompt... " className="w-full max-w-md px-5 py-3 rounded-2xl bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-md" />
    <div className="text-gray-400 text-sm ">You can post the AI generated image to the Community</div>
    </div>
    <div className="flex  gap-5">
    <Button text=" Generate Image" icon={<AutoAwesome/>} handleButton={generateImageFun}/>
    <Button text=" Post Image" icon={<CreateRounded/>}  handleButton={createPostFun}/>
    </div>
    </form>
  </>
  )
}
