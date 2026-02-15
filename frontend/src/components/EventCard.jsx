import { Link } from "react-router-dom"

function EventCard({details}) {
    const {name, id, category, location} = details
    
  return (
    <Link to={`/event/${id}`}>
    <li className=' w-[300px] h-[300px] rounded-full bg-pink-100 hover:shadow-yellow-200 flex flex-col justify-center items-center shadow-lg shadow-purple-200 m-5 pl-3 p-5'>
        <p className='font-mono'>Event : <span className='font-[sans-serif] text-purple-500 font-bold'>{name}</span></p>
        <p className='font-mono'>Location : <span className='font-[sans-serif] text-purple-500 font-bold'>{location}</span></p>
        <p className='font-mono'>Category : <span className='font-[sans-serif] text-purple-500 font-bold'>{category}</span></p>
    </li>
    </Link>
  )
}

export default EventCard