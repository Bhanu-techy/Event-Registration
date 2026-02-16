import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-5">
        <div className="flex border w-[350px] h-[350px] flex-col justify-center items-center shadow-md shadow-blue-300">
            <Link to="/login">
        <button className="text-white bg-blue-500 w-[60px] rounded p-1 m-1">Login</button>
        </Link>
        <h1 className="m-5">OR</h1>
        <Link to="/register">
        <button className="text-white bg-blue-500 w-[70px] rounded p-1 m-1">Register</button>
        </Link>
        </div>
    </div>
  )
}

export default Home