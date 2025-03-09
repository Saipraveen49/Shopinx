import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Router, Route} from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Footer from './components/Footer'
import AccessAccount from './pages/Accessaccount'
import NearByStores from './pages/NearByStores'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/access-account' element={<AccessAccount/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/near-stores' element={<NearByStores/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
