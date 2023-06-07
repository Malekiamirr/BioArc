import { Details } from "../../components"

function RoomsList({rooms}) {
  const {allRooms, ...rest} = rooms
  const details = {
    "allRooms": allRooms.length,
    ...rest,
    "buildings": undefined,
    "full": undefined
  }
  console.log(details)
  
  return (
    <div className="p-6 mt-2 border rounded-lg">
      <div className="flex justify-between">
        <h3 className="text-xl font-Yekan-bold text-primary-light">لیست ساختمان های طبقه اول بخش روماتولوژی ساختمان امید:</h3>
        <Details details={details}/>
      </div>
    </div>
  )
}

export default RoomsList