import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='h-[10vh] bg-gray-300 p-2 flex justify-between items-center'>
        <h1>Logo</h1>
        <div className='w-[200px] flex justify-between underline'>
            <Link to='/events'>Events</Link>
            <Link to='/dashboard'>Dashboard</Link>
        </div>
        <button>Logout</button>
    </div>
  )
}

export default Header