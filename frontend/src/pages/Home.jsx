import { useState } from "react";
import Card from "../components/Card";
export default function Home() {
    const [item,setItem]=useState({author:"Dhanraj",photo:"https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt5f18c2119ce26485/6668df65db90945e0caf9be6/beautiful-flowers-lotus.jpg?q=70&width=3840&auto=webp",prompt:"Flower"});
  return (
    <div className="min-h-screen w-full  pt-10 bg-[#1f1f1f] flex items-center gap-5 flex-col px-4">
      <h1 className="text-white text-2xl text-center">Explore Popular Post in the Community</h1>
      <span className="text-white font-extrabold text-4xl text-center">► Generated With AI ◄</span>
      
      <input 
        type="text"
        placeholder="Search posts..."
        className="w-full max-w-md px-5 py-3 rounded-2xl bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-md"
      />
      <div className="flex flex-wrap justify-center gap-10 ">
        <Card item={item}/>
        <Card item={item}/>
        <Card item={item}/>
        <Card item={item}/>
        <Card item={item}/>
        <Card item={item}/>
        <Card item={item}/>
        <Card item={item}/>
        <Card item={item}/>
        <Card item={item}/>
        <Card item={item}/>
        <Card item={item}/>
        <Card item={item}/>
      </div>
    </div>
  );
}
