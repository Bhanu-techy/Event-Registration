import React from 'react'

function Header() {
  return (
    <div className='h-[10vh] bg-gray-300 p-2 flex justify-between items-center'>
        <h1>Logo</h1>
        <button>Logout</button>
    </div>
  )
}

export default Header