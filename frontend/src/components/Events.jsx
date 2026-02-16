import {useEffect, useState} from 'react'
import Header from './Header'
import EventCard from './EventCard'
import { CiSearch } from "react-icons/ci";

function Events() {

    const [events, setEvents] = useState([])
    const [category, setCategory] = useState("")
    const [search, setSearch] = useState("")

    const getEvents = async () => {
            const response = await fetch ('https://event-registration-68op.onrender.com/events')
            const data = await response.json()
            setEvents(data)
            setCategory("")
        }

    useEffect(()=>{
        getEvents()
    },[])

    const onClickSearch =  async () =>{
        const searchResults = events.filter(each => each.name.toLowerCase().includes(search.toLocaleLowerCase()))
        setEvents(searchResults)
        if (search === ""){
            getEvents()
        }
    }

    const filteredEvents = category !== "" ? events.filter(each => each.category === category) : events

  return (
    <>
    <Header/>
    <div className='flex'>
        <div className='w-[250px] flex flex-col items-center p-5'>
            <div className='w-[220px] h-[40px] rounded-3xl border-2 border-gray-400 flex justify-between p-2 mt-5 mb-5'>
            <input type='search' className='focus:outline-none' onChange={(e)=>setSearch(e.target.value)} placeholder='search by name' />
            <button onClick={onClickSearch}>
                <CiSearch  size={25}/>
            </button>
        </div>
            <select onChange={(e)=>setCategory(e.target.value)} className='border-2 border-gray-400 w-[220px] h-[42px] rounded-3xl p-2 m-2 mt-5'>
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