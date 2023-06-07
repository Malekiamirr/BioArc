import {FaHospital} from "react-icons/fa"
import { FloorsList } from "../../components"
import {RoomsList} from "../index"
function Building({buildings}) {
  return (
    <div className="flex flex-col items-center justify-center gap-40">
        {buildings.map(building=> (
        <div key={building.id} className="w-full">
            <div className="flex flex-col items-center gap-4">
                <FaHospital className="w-20 h-20 text-secondary"/>
                <div className="text-center">
                    <h5 className="text-xl font-Yekan-bold">{building.building}</h5>
                    <span className="text-xs text-primary-lighter">{building.subName}</span>
                </div>
            </div>
            <FloorsList floors={building.floors}/>
            <RoomsList rooms={building.details}/>
        </div>
        ))}
    </div>
  )
}

export default Building