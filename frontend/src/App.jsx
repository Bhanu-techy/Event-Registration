import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import Events from './components/Events'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/events' element={<Events/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
