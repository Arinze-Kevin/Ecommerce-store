import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Announcement from './components/Announcement'
import Header from './components/Header'
import Slider from './components/Slider'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import User from './pages/User'
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <Router>
        <div>
          <Announcement />
          <Header />
          <Slider />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/user' element={<User />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    
    </>
  )

}

export default App