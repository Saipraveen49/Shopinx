import React, { useEffect } from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AddProduct from './pages/AddProduct'
import Sidebar from './components/Sidebar'
import ProductsListPage from './pages/ProductListPage'
import { useState } from 'react'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(()=>{
    localStorage.setItem('token',token);
  },[token])
  return (
    <>
    <ToastContainer/>
    {token === ""? <Login token={token} setToken={setToken} />
    :
      <div>
      <Navbar setToken={setToken}/>
      <div className='flex w-full'>
          <Sidebar setToken={setToken}/>
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
            <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/addProduct' element={<AddProduct token={token}/>}/>
            <Route path='/listProducts' element={<ProductsListPage token={token}/>} />
            </Routes>
          </div>
        </div>
    </div>
    }
    </>
    
  )
}

export default App
