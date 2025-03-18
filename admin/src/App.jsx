import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AddProduct from './pages/AddProduct'
import Sidebar from './components/Sidebar'
import ProductsListPage from './pages/ProductListPage'
const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex w-full'>
          <Sidebar/>
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
            <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/addProduct' element={<AddProduct/>}/>
            <Route path='/listProducts' element={<ProductsListPage/>} />
            </Routes>
          </div>
        </div>
    </div>
  )
}

export default App
