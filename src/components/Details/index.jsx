import {FaBed} from "react-icons/fa"

function Details({details}) {
  return (
    <div className="px-4 py-6 rounded bg-anti-flash-light">
      <ul className="grid grid-cols-2 text-sm text-primary-lighter gap-x-12 gap-y-4">
       {details.buildings && <li>تعداد ساختمان ها : {details.buildings} عدد</li>}
       
       <li className="flex items-center gap-2">
        <FaBed className="w-4 h-4 text-light-blue"/>
        <p>قابل رزرو : {details.reservable} عدد</p>
       </li>
       
       <li>تعداد کل اتاق ها : {details.allRooms} عدد</li>
       
       <li className="flex items-center gap-2">
        <FaBed className="w-4 h-4 text-sunset"/>
        <p>غیر‌قابل رزرو : {details.unreservable} عدد</p>
       </li>

       <li>تعداد کل تخت ها : {details.allBeds} عدد</li>

       {details.full && <li className="flex items-center gap-2">
       <FaBed className="w-4 h-4 text-platinum"/>
        <p>پر : {details.full} عدد</p>
       </li>}
      </ul>
    </div>
  )
}

export default Details