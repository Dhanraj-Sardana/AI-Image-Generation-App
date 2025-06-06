import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import Index from './components/Index'
import { useEffect } from 'react'
import NavBar from './components/NavBar'
function App() {
useEffect(()=>{
setTimeout(()=>setLoading(false),2000)
},[])
const [Loading,setLoading]=useState(true);
  return (
    <>
      <NavBar />
      
        <Routes>
          <Route index element={Loading ? <Index /> : <Home />} />
          <Route path="/post" element={<Post />} />
        </Routes>
     </>
    
  )
}

export default App 
