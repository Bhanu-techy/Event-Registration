import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import UserContext from '../Context/UserContext'


function Dashboard() {

  const [data, setData] = useState([])
  const {userId} = useContext(UserContext)
  

  useEffect(()=>{
        const getEvents = async () => {
            const response = await fetch (`https://event-registration-68op.onrender.com/registration/${userId}`)
            const data = await response.json()
            setData(data)
        }
        getEvents()
    },[userId])


  return (
    <>
    <Header/>
    <div className='p-5'>
      {data.length === 0 ? 
      <div className='p-5 w-full'>
        <h1 className='text-xl text-center'>No Registrations</h1>
       
      </div> :
       <ul>
            <div className='border border-md shadow-md rounded m-5 flex p-3 justify-between items-centers w-[90%]'>
              <p className='text-lg '>Event Name</p>
              <p className='text-lg'>Category</p>
              <p className='text-lg'>Date</p>
            </div>
        {data.map((each)=>{
          const date = each.event_date.split(" ")[0]
          return(
            <li key={each.id} className='border border-md shadow-purple-300 shadow-md rounded m-5 flex p-3 justify-between items-centers w-[90%]'>
              <p>{each.event_name}</p>
              <p>{each.category}</p>
              <p>{date}</p>
            </li>
            
          )
          })}
        </ul>}
    </div>
    </>
  )
}

export default Dashboard