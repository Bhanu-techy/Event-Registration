import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {

    const [name, setName] = useState("")
   const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showSubmitErr, setShowErr] = useState(false)
    const [errMsg, setErrmsg ] = useState("")

     const navigate = useNavigate();

    const submitForm = async event => {
        event.preventDefault()

    const userDetails = {name,email, password}
    const url = 'https://event-registration-68op.onrender.com/register'
    const options = {
      method: 'POST',
      headers : {"Content-Type" : "application/json"},
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    
    if (response.ok) {
      
      navigate("/events", {replace : true})
      
    } else {
      setErrmsg(data.error_msg)
      setShowErr(true)
    }
    }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
        <div className='w-[450px] h-[400px] rounded shadow-lg shadow-blue-200 flex justify-center items-center '>
          <form onSubmit={submitForm} className='h-[90%] w-[100%] flex flex-col justify-between items-center'>
          <h1 className='text-blue-600 text-2xl font-mono'>Login</h1>
          <div className="flex flex-col w-[300px] m-3">
                  <label htmlFor="username">USERNAME</label>
                  <input
                    id="username"
                    type="text"
                    className="w-[270px] h-[30px] rounded mt-1 bg-gray-300"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
          <div className="flex flex-col w-[300px] m-3">
                  <label htmlFor="email">EMAIL</label>
                  <input
                    id="email"
                    type="text"
                    className="w-[270px] h-[30px] rounded mt-1 bg-gray-300"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col justiy-center items-start w-[300px] m-3">
                  <label htmlFor="password">PASSWORD</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    className="w-[270px] h-[30px] rounded mt-1 bg-gray-300"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                {showSubmitErr && <p className="text-red-600">{errMsg}</p>}
                <button type="submit" className="text-white bg-blue-600 h-[30px] w-[100px] rounded m-3">
                  Login
                </button>
              </form>
        </div>
         <Link to="/" className="self-end bg-gray-400 text-white rounded w-[50px] text-center m-5">Back</Link>
    </div>
  )
}

export default Register