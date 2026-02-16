import {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import UserContext from '../Context/UserContext'
import Header from './Header'

function EventDetails() {
    const [details, setDetails] = useState({})
    const [date, setDate] = useState("")
    const [time, setTime] = useState('')
    const {id} = useParams()

    const {userId} = useContext(UserContext)

    useEffect(()=>{
        const getEvents = async () => {
            const response = await fetch (`https://event-registration-68op.onrender.com/events/${id}`)
            const data = await response.json()
            if (response.ok){
                setDetails(data[0])
                const date_time = data[0].event_date.split(' ')
                setDate(date_time[0])
                setTime(date_time[1])
            }
        }
        getEvents()
    },[id])

    const onClickRegister = async () =>{

        const eventDetails = {userId, eventId : id}

        const url = 'https://event-registration-68op.onrender.com/registration'

        const options = {
        method: 'POST',
        headers : {"Content-Type" : "application/json"},
        body: JSON.stringify(eventDetails),
        }

        const response = await fetch (url, options)
        const data = await response.json()
        
        if (response.ok){
            alert("Event Registered Successfully")
        }else{
            alert(data.error_msg)
        }

    }

    const {name, category, location, description, capacity} = details
    
  return (
    <>
    <Header/>
    <div className='p-5 h-[90vh] flex flex-col justify-center items-center text-lg'>
        <div className=' rounded-2xl w-[800px] border h-[500px] shadow-xl shadow-purple-200 flex flex-col justify-center items-center m-3 pl-5 p-3'>
        <p className='font-[sans-serif] m-2'>Event : <span className='font-mono text-purple-500 font-bold'>{name}</span></p>
        <p className='font-[sans-serif] m-2'>Location : <span className='font-mono text-purple-500 font-bold'>{location}</span></p>
        <p className='font-[sans-serif] m-2'>Date : <span className='font-mono text-purple-500 font-bold'>{date}</span></p>
        <p className='font-[sans-serif] m-2'>Time : <span className='font-mono text-purple-500 font-bold'>{time}</span></p>
        <p className='font-[sans-serif] m-2'>Category : <span className='font-mono text-purple-500 font-bold'>{category}</span></p>
        <p className='font-[sans-serif] m-2'>Description : <span className='font-mono text-purple-500 font-bold'>{description}</span></p>
        <p className='font-[sans-serif] m-2'>Capacity : <span className='font-mono text-purple-500 font-bold'>{capacity}</span></p>
        <button onClick={onClickRegister} className='m-5 bg-blue-500 text-white rounded w-[95px] h-[35px]'>Register</button>
        </div>
    </div>
    </>
  )
}

export default EventDetails