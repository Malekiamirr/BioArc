import {FaBed} from "react-icons/fa"

function Details({details}) {
  return (
    <div className="px-4 py-6 rounded bg-anti-flash-light">
      <div className="flex flex-col gap-4 sm:gap-12 sm:flex-row text-primary-lighter">
       
       <ul className="space-y-4">
       {details.buildings && <li>تعداد ساختمان ها : {details.buildings} عدد</li>}
       <li className="order-1">تعداد کل اتاق ها : {details.allRooms} عدد</li>
       <li>تعداد کل تخت ها : {details.allBeds} عدد</li>
       </ul>
       
       <ul className="space-y-4">
         <li className={`flex items-center gap-2`}>
        <FaBed className="w-4 h-4 text-light-blue"/>
        <p>قابل رزرو : {details.reservable} عدد</p>
       </li>
       
       
       <li className={`flex items-center gap-2`}>
        <FaBed className="w-4 h-4 text-sunset"/>
        <p>غیر‌قابل رزرو : {details.unreservable} عدد</p>
       </li>


       {details.full && <li className="flex items-center gap-2">
       <FaBed className="w-4 h-4 text-platinum"/>
        <p>پر : {details.full} عدد</p>
       </li>}
       </ul>
      
      </div>
    </div>
  )
}

export default Details