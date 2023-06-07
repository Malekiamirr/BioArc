import { Hospital } from "../../layouts";
import { useGetHospitalsDetailsQuery } from "../../api/apiSlice";

function HomePage() {
const {data, isLoading, isError} = useGetHospitalsDetailsQuery();

if (isLoading || isError) {
  return;
}

  return (
    <div className="bg-white h-screen pt-10 px-10 flex flex-col gap-20">
        <h1 className="text-4xl font-Yekan-bold">لیست تخت ها مجتمع بیمارستانی امام خمینی</h1>
        {data.map(hospital=> <Hospital key={hospital.id} data={hospital}/>)}
    </div>
  )
}

export default HomePage