import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-5">
        <div className="flex border">
            <Link to="/login">
        <button className="text-white bg-blue-500 w-[60px] rounded p-1 m-1">Login</button>
        </Link>
        <h1 className="m-2">or</h1>
        <Link to="/register">
        <button className="text-white bg-blue-500 w-[70px] rounded p-1 m-1">Register</button>
        </Link>
        </div>
    </div>
  )
}

export default Home