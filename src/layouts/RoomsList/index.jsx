import { Details, Rooms } from "../../components"

function RoomsList({rooms}) {
  const {allRooms, ...rest} = rooms
  const details = {
    "allRooms": allRooms.length,
    ...rest,
    "buildings": undefined,
    "full": undefined
  }
  
  return (
    <div className="pl-8 lgr:pl-12 pr-8 -mt-[3px] border rounded-lg py-7">
      <div className="flex flex-col justify-between 2lg:flex-row">
        <h3 className="text-base md:text-xl lgr:text-2xl font-Yekan-bold text-primary-light">لیست ساختمان های طبقه اول بخش روماتولوژی ساختمان امید:</h3>
        <div className="max-w-lg mt-8 mb-10 2lg:w-auto 2lg:my-0">
        <Details details={details}/>
        </div>
      </div>
      <div className="mt-12 space-y-24">
        {rooms.allRooms.map((room, i)=> <Rooms key={i} room={room}/>)}
      </div>
    </div>
  )
}

export default RoomsList