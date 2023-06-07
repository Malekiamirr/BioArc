import {Details} from "../../components/index"
import {Building} from "../index";

function Hospital({data}) {
  const {id, hospital, hospitalBuildingsList, ...details} = data;
  return (
    <div className="relative px-10 py-20 border rounded-lg border-border-color">
        <span className="absolute top-0 translate-y-[-50%] right-8 px-6 bg-white font-Yekan-bold text-xl">{data.hospital}</span>
        <div className="flex justify-between">
            <h3 className="text-xl font-Yekan-bold text-primary-light">لیست ساختمان های {data.hospital}:</h3>
            <Details details={details}/>
        </div>
        <div>
          <Building buildings={data.hospitalBuildingsList}/>
        </div>
    </div>
  )
}

export default Hospital