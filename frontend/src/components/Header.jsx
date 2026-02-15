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
    <div className='h-[10vh] bg-gray-300 p-2 flex justify-between items-center'>
        <h1>Logo</h1>
        <div className='w-[200px] flex justify-between underline'>
            <Link to='/events'>Events</Link>
            <Link to='/dashboard'>Dashboard</Link>
        </div>
        <button onClick={onClickLogout}>Logout</button>
    </div>
  )
}

export default Header