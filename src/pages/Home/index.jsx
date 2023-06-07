import { Hospital } from "../../layouts";
import { useGetHospitalsDetailsQuery } from "../../api/apiSlice";

function HomePage() {
const {data, isLoading, isError} = useGetHospitalsDetailsQuery();

if (isLoading || isError) {
  return;
}

  return (
    <div className="flex flex-col px-10 pt-10 pb-20 bg-white gap-28">
        <h1 className="text-4xl font-Yekan-bold">لیست تخت ها مجتمع بیمارستانی امام خمینی</h1>
        {data.map(hospital=> <Hospital key={hospital.id} data={hospital}/>)}
    </div>
  )
}

export default HomePage