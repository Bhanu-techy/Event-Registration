import {useEffect, useState} from 'react'
import Header from './Header'
import EventCard from './EventCard'

function Events() {

    const [events, setEvents] = useState([])

    useEffect(()=>{
        const getEvents = async () => {
            const response = await fetch ('https://event-registration-68op.onrender.com/events')
            const data = await response.json()
            setEvents(data)
        }
        getEvents()
    },[])

  return (
    <>
    <Header/>
    <div className='p-2'>
        <ul className='flex flex-wrap'>
            {events.map(each => (
                <EventCard  key={each.id} details={each}/>
            ))}
        </ul>
    </div>
    </>
  )
}

export default Events