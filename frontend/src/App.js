import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'
import Register from './pages/Register'
import Cart from './pages/Cart'
import MensFashion from './pages/MensFashion'
import WomensFashion from './pages/WomensFashion'
import Gaming from './pages/Gaming'
import HealthBeauty from './pages/HealthBeauty'
import Accessories from './pages/Accessories'
import ProductPage from './pages/ProductPage'
import Pay from './pages/Pay'
import Success from './pages/Success'

function App() {
 
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user' element={<User />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/mensfashion' element={<MensFashion />} />
            <Route path='/womensfashion' element={<WomensFashion />} />
            <Route path='/gaming' element={<Gaming />} />
            <Route path='/accessories' element={<Accessories />} />
            <Route path='/health&beauty' element={<HealthBeauty />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/pay' element={<Pay />} />
            <Route path='/success' element={<Success />} />
          </Routes>
          <Newsletter />
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  )

}

export default App