import {Details} from "../../components/index"

function Hospital({data}) {
  const {id, hospital, hospitalBuildingsList, ...details} = data;

  return (
    <div className="relative border border-border-color rounded-lg py-10 px-8">
        <span className="absolute top-0 translate-y-[-50%] right-8 px-6 bg-white font-Yekan-bold text-xl">{data.hospital}</span>
        <div className="flex justify-between">
            <h3 className="font-Yekan-bold text-primary-light text-lg">لیست ساختمان های {data.hospital}:</h3>
            <Details details={details}/>
        </div>
    </div>
  )
}

export default Hospital