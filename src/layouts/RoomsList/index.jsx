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
    <div className="py-8 pl-12 pr-8 mt-2 border rounded-lg">
      <div className="flex justify-between">
        <h3 className="text-xl font-Yekan-bold text-primary-light">لیست ساختمان های طبقه اول بخش روماتولوژی ساختمان امید:</h3>
        <Details details={details}/>
      </div>
      <div className="mt-12 space-y-24">
        {rooms.allRooms.map((room, i)=> <Rooms key={i} room={room}/>)}
      </div>
    </div>
  )
}

export default RoomsList