

function EventCard({details}) {
    const {name, category, location, event_date} = details
  return (
    <li className='border w-[350px] h-[150px] rounded-tr-3xl rounded-bl-3xl hover:shadow-yellow-200 flex flex-col justify-center items-start shadow-lg shadow-purple-200 m-2 pl-3 p-2'>
        <p className='font-mono'>Event : <span className='font-[sans-serif] text-purple-500 font-bold'>{name}</span></p>
        <p className='font-mono'>Location : <span className='font-[sans-serif] text-purple-500 font-bold'>{location}</span></p>
        <p className='font-mono'>Date : <span className='font-[sans-serif] text-purple-500 font-bold'>{event_date}</span></p>
        <p className='font-mono'>Category : <span className='font-[sans-serif] text-purple-500 font-bold'>{category}</span></p>
        <button className="align-end">View More</button>
    </li>
  )
}

export default EventCard