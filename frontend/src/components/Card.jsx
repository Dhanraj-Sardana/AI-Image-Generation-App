import { LazyLoadImage } from "react-lazy-load-image-component"
import Avatar from '@mui/material/Avatar';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import FileSaver from 'file-saver'
export default function Card({item}) {
    return (
        <div className="group text-white transition relative hover:scale-110  flex cursor-pointer shadow-xl/90" >
            <LazyLoadImage className='h-50 w-50 ' src={item?.photo} alt={item.prompt}/>
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-[rgb(0,0,0,0.3)] opacity-0 group-hover:opacity-100 p-5  group-hover:scale-110 ease flex flex-col items-start justify-end pb-5 gap-2 backdrop-blur-xs" >
                <p>{item?.prompt}</p>
                <div className="flex items-center justify-between w-full ">
                    <div  className="flex items-center gap-2">
                        <h2>{item?.name}</h2>
                        <Avatar>{item?.name[0]}</Avatar>
                    </div>
                    <DownloadRoundedIcon onClick={()=>FileSaver.saveAs(item?.photo,"download.jpeg")} />

                </div>

            </div>
        </div>
    )
}
