import { CircularProgress } from "@mui/material"
export default function GeneratedImageCard({loading,src}) {
  return (
    <div className="flex justify-center items-center">
    <div className="border flex items-center justify-center   p-1 border-dashed border-yellow-500 rounded-lg h-120 w-100">
        {loading? <>
        <div className="flex items-center gap-5">
        <CircularProgress />
        <span className="text-white text-sm animate-pulse tracking-wider">Generating your image...</span>
        </div>
        </>: (
            <>
            {
                src?<img src={src} className="object-cover bg-black border rounded-xl "/>:
                <span className="text-gray-400 text-bold">Write a prompt to generate an Image</span>
            }
            </>
        )}
      
    </div>
    </div>
  
  )
}
