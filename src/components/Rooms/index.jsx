import {MdOutlineAddHome} from "react-icons/md";
import {BedCard} from "../index"

function Rooms({room}) {

  return (
    <div className="relative w-full px-6 py-10 rounded-md bg-anti-flash-light ">
        <div className="absolute right-0 flex items-end justify-center gap-4 px-6 py-3 rounded-md -top-12 bg-anti-flash-light">
            <MdOutlineAddHome className="w-9 h-9 text-secondary"/>
            <p className="text-lg">اتاق {room.roomName}</p>
        </div>
        <div className="flex gap-4">
        {room.beds.map((bed,i)=> <BedCard key={i} bed={bed}/>)}
        </div>
    </div>
  )
}

export default Rooms