import {Details} from "../../components/index"
import {Building} from "../index";

function Hospital({data}) {
  const {id, hospital, hospitalBuildingsList, ...details} = data;
  return (
    <div className="relative px-6 py-20 border rounded-lg lg:px-10 border-border-color">
        <span className="absolute top-0 translate-y-[-50%] right-8 px-6 bg-white font-Yekan-bold text-xl md:text-2xl">{data.hospital}</span>
        <div className="flex flex-col 2md:flex-row 2md:justify-between">
            <h3 className="text-xl md:text-2xl font-Yekan-bold text-primary-light">لیست ساختمان های {data.hospital}:</h3>
            <div className="max-w-lg my-8 2md:my-0 2md:w-auto">
            <Details details={details}/>
            </div>
        </div>
        <div className="mt-4 2lg:mt-0">
          <Building buildings={data.hospitalBuildingsList}/>
        </div>
    </div>
  )
}

export default Hospital