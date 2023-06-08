import {FaBed} from "react-icons/fa";
import {Button} from "../index";

function BedCard({bed}) {
    return (
    <div className="flex flex-col items-center p-6 transition-all duration-300 bg-white rounded-md shadow-lg shadow-platinum hover:cursor-pointer hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center gap-6"> 
        <FaBed className={`w-10 h-10 text-${bed.bedColor}`}/>          
            <p className={`text-lg font-Yekan-medium ${!bed.select ? "text-primary-lighter-3" : ""}`}>{bed.bedName}</p>
        </div>
        <p className={`mt-2 mb-4 ${bed.select ? "text-primary-lighter-3" : "text-[#cccccc]"}`}>شماره تخت: {bed.bedNumber}</p>
        <div className="space-y-4">
          <Button available={bed.available}/>
        <Button showMore={true}/>  
        </div>
    </div>
  )
}

export default BedCard