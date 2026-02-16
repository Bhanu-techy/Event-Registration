import {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../Context/UserContext'

function Header() {

  const {setToken, setId}= useContext(UserContext)
  const navigate = useNavigate()

  const onClickLogout =()=>{
    setId(null)
    setToken("")
    navigate("/", {replace : true})

  }

  return (
    <div className='h-[10vh] bg-purple-200 p-2 flex justify-between items-center p-5'>
        <img src="https://res.cloudinary.com/dsqphsoxb/image/upload/v1723546423/samples/logo.png" className='w-[50px]'/>
        <div className='w-[200px] flex justify-between underline'>
            <Link to='/events' className='text-blue-700'>Events</Link>
            <Link to='/dashboard' className='text-orange-600'>Dashboard</Link>
        </div>
        <button className='bg-blue-600 text-white rounded w-[60px] h-[27px]' onClick={onClickLogout}>Logout</button>
    </div>
  )
}

export default Header