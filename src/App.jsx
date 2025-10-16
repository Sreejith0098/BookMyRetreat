import { Route, Routes } from 'react-router-dom'
import Landing from '../src/pages/Landing.jsx'
import './App.css'
import Login from './pages/Login.jsx'
function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
     
    </>
  )
}

export default App
