import {FaHospitalAlt} from "react-icons/fa"
import {GrFormNext} from "react-icons/gr";

function FloorsList({floors}) {
    let slider = floors.length > 4 ? <div className="flex items-center justify-center px-2 py-3 rounded bg-anti-flash-light"><GrFormNext className="w-4 h-4 text-gray-300 md:w-8 md:h-8"/></div> : undefined;
  return (
    <div className={` md:flex md:items-center ${floors.length > 4 ? "md:justify-between" : "md:justify-center gap-12"} mt-16 cursor-pointer`}>
        {slider}
        {floors.map(floor=> (
            <div key={floor} className="relative flex flex-col items-center gap-3 pb-4 text-primary-lighter-2 hover:text-secondary group">
               <span className="absolute inset-x-0 bottom-0 h-1 duration-300 ease-out transform scale-x-0 rounded-xl transition-noneion-transform bg-secondary group-hover:scale-x-100"></span>
                <FaHospitalAlt className="w-12 h-12"/>
                <p className="text-base lgr:text-lg font-Yekan-medium">{floor}</p>
            </div>
        ))}
        <div className={`${slider ? "" : "hidden"} rotate-180`}>
        {slider}
        </div>
    </div>
  ) 
}

export default FloorsList