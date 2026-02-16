import {useEffect, useState} from 'react'
import Header from './Header'
import EventCard from './EventCard'

function Events() {

    const [events, setEvents] = useState([])
    const [category, setCategory] = useState("")

    useEffect(()=>{
        const getEvents = async () => {
            const response = await fetch ('https://event-registration-68op.onrender.com/events')
            const data = await response.json()
            setEvents(data)
            setCategory("")
        }
        getEvents()
    },[])

    const filteredEvents = category !== "" ? events.filter(each => each.category === category) : events

  return (
    <>
    <Header/>
    <div className='flex'>
        <div className='w-[250px] flex flex-col p-5'>
            <select onChange={(e)=>setCategory(e.target.value)} className='border-2 w-[150px] h-[42px] rounded-3xl p-2 m-2'>
                <option value="" selected disabled>Categories</option>
                <option value="">All</option>
                <option value="Music">Music</option>
                <option value="Sports">Sports</option>
                <option value="Technology">Technology</option>
            </select>
        </div>
        <hr className='bg-gray-300 w-[2px] h-[90vh]'/>
        <ul className='flex flex-wrap'>
            {filteredEvents.map(each => (
                <EventCard  key={each.id} details={each}/>
            ))}
        </ul>
    </div>
    </>
  )
}

export default Events