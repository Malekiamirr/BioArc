import {FaHospitalAlt} from "react-icons/fa"
import {GrFormNext} from "react-icons/gr";

function FloorsList({floors}) {
    let slider = floors.length > 4 ? <div className="flex items-center justify-center px-2 py-3 rounded bg-anti-flash-light"><GrFormNext className="w-8 h-8 text-gray-300"/></div> : undefined;
  return (
    <div className="flex items-center justify-between mt-16 cursor-pointer">
        {slider}
        {floors.map(floor=> (
            <div key={floor} className="flex flex-col items-center gap-3 pb-3 transition-all border-b-4 border-b-transparent text-primary-lighter-2 hover:text-secondary hover:border-b-4 hover:border-secondary">
                <FaHospitalAlt className="w-12 h-12"/>
                <p className="font-Yekan-medium">{floor}</p>
            </div>
        ))}
        <div className={`${slider ? "" : "hidden"} rotate-180`}>
        {slider}
        </div>
    </div>
  ) 
}

export default FloorsList