import { useState } from 'react'
import GeneratedImageCard from '../components/GeneratedImageCard'
import GenerateImageForm from '../components/GenerateImageForm'

export default function Post() {
  const [generateImageLoading,setGenerateImageLoading]=useState(false);
  const [createPostLoading,setCreatePostLoading]=useState(false);
  const [post,setPost]=useState({
    name:"",
    prompt:"",
    photo:""
  });
  return (
    <>
    <div className='flex justify-center '>
    <h1 className="text-white font-extrabold text-4xl pt-4">► Generate Image With Prompt ◄</h1>
    </div>
    <div className="flex gap-10   justify-center  ">
      
      <GenerateImageForm post={post} 
      setPost={setPost}
      createPostLoading={createPostLoading}
      setCreatePostLoading={setCreatePostLoading}
      generateImageLoading={generateImageLoading}
      setGenerateImageLoading={setGenerateImageLoading} />
      
      <GeneratedImageCard loading={generateImageLoading} src={post?.photo} createPostLoading={createPostLoading}/>
    </div>
  </>
  )
}
