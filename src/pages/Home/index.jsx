import { Hospital } from "../../layouts";
import { useGetHospitalsDetailsQuery } from "../../api/apiSlice";

function HomePage() {
const {data, isLoading, isError} = useGetHospitalsDetailsQuery();

if (isLoading || isError) {
  return;
}

  return (
    <div className="flex flex-col gap-20 px-4 pt-10 bg-white sm:px-10 pb-28 2md:gap-28">
        <h1 className="mr-3 text-xl sm:text-2xl 2md:text-4xl font-Yekan-bold">لیست تخت ها مجتمع بیمارستانی امام خمینی</h1>
        {data.map(hospital=> <Hospital key={hospital.id} data={hospital}/>)}
    </div>
  )
}

export default HomePage