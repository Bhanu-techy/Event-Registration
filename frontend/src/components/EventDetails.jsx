import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

function EventDetails() {
    const [details, setDetails] = useState({})
    const [date, setDate] = useState("")
    const [time, setTime] = useState('')
    const {id} = useParams()

    useEffect(()=>{
        const getEvents = async () => {
            const response = await fetch (`https://event-registration-68op.onrender.com/events/${id}`)
            const data = await response.json()
            if (response.ok){
                setDetails(data[0])
                const date_time = data[0].event_date.split(' ')
                setDate(date_time[0])
                setTime(date_time[1])
                console.log(date_time)
            }

        }
        
    
        getEvents()
    },[id])

    const {name, category, location, description, capacity} = details
    

  return (
    <>
    <Header/>
    <div className='p-5 h-[90vh] flex justify-center items-center text-lg'>
        <div className=' rounded-tr-full rounded-bl-full w-[1000px] border h-[500px] shadow-xl shadow-purple-200 flex flex-col justify-center items-center pl-5 p-3'>
        <p className='font-[sans-serif] m-2'>Event : <span className='font-mono text-purple-500 font-bold'>{name}</span></p>
        <p className='font-[sans-serif] m-2'>Location : <span className='font-mono text-purple-500 font-bold'>{location}</span></p>
        <p className='font-[sans-serif] m-2'>Date : <span className='font-mono text-purple-500 font-bold'>{date}</span></p>
        <p className='font-[sans-serif] m-2'>Time : <span className='font-mono text-purple-500 font-bold'>{time}</span></p>
        <p className='font-[sans-serif] m-2'>Category : <span className='font-mono text-purple-500 font-bold'>{category}</span></p>
        <p className='font-[sans-serif] m-2'>Description : <span className='font-mono text-purple-500 font-bold'>{description}</span></p>
        <p className='font-[sans-serif] m-2'>Capacity : <span className='font-mono text-purple-500 font-bold'>{capacity}</span></p>
        </div>
    </div>
    </>
  )
}

export default EventDetails