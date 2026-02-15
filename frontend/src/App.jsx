import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import Events from './components/Events'
import EventDetails from './components/EventDetails'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/events' element={<ProtectedRoute><Events/></ProtectedRoute>}/>
      <Route path='/event/:id' element={<ProtectedRoute><EventDetails/></ProtectedRoute>}/>
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
