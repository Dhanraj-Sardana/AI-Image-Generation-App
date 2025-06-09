import { use, useState } from "react";
import { getPost } from "../api";
import { CircularProgress } from "@mui/material"
import Card from "../components/Card";
import { useEffect } from "react";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([])
  const getAllPosts=async ()=>{
    setLoading(true);
    try {
      const res=await getPost();
      setLoading(false);
      console.log(res.data);
      
      setPosts(res?.data);
      setFilteredPosts(res?.data);
    } catch (error) {
      console.error("Post Error:", error);
      alert("failed to get posts... Try again.");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
 getAllPosts();
  }, [])
  useEffect(()=>{
if(!search){
  setFilteredPosts(posts);
}
const filterPost=posts.filter((post)=>{
  const promptMatch=post?.prompt?.toLowerCase().includes(search.toString().toLowerCase());
  const nameMatch=post?.name?.toLowerCase().includes(search.toString().toLowerCase());
  return promptMatch || nameMatch;
})
if(search){
  setFilteredPosts(filterPost);
}
  },[posts,search])
  return (
    <div className="min-h-screen w-full  pt-10 bg-[#1f1f1f] flex items-center gap-5 flex-col px-4">
      <h1 className="text-white text-2xl text-center">Explore Popular Post in the Community</h1>
      <span className="text-white font-extrabold text-4xl text-center">► Generated With AI ◄</span>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="w-full max-w-md px-5 py-3 rounded-2xl bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-md"
      />
      {loading ? <div><CircularProgress />
       <span className="text-white text-3xl animate-pulse tracking-wider">Posting your image...</span>
      </div>
      :
        <div className="flex flex-wrap justify-center gap-10 ">
          {filteredPosts.length == 0 ? <div className="text-white font-bold">No post Found</div> : <>
            {
              filteredPosts.slice().reverse().map((itm, idx) => {
                 return <Card key={idx} item={itm} />;

              })
            }

          </>}


        </div>
      }
    </div>
  );
}
