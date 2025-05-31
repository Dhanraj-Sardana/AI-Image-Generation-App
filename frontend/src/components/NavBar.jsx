import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useLocation } from 'react-router'
export default function NavBar() {
  const location = useLocation()
  const navigate = useNavigate();
  const handlePost = () => {
    navigate('/post');
    
  };

  return (
    <nav className=" sticky top-0 z-10 bg-gradient-to-br from-[#1f1f1f] to-[#3a3a3a] px-6 py-3 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/favicon.png" alt="logo image" className="h-12 w-12" />
        <span className="text-teal-300 text-xl font-bold tracking-wide">GENIVIS</span>
      </div>
     { location.pathname==='/'? <Button text="Create a Post" handleButton={handlePost} /> : <Button text='Explore Post'/>}
    </nav>
  );
}