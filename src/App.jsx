import { useState, useDebugValue } from 'react'
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Sign from './pages/Sign_in'
import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Announcement from './Components/Announcement'
function useLocalStorage(date) {
  const [data, setDate] = useState(date)
  useDebugValue(date, date => date.toDateString());
  useDebugValue(123);
}
function App() {
  // const [name,setName]=useState('123')
  useLocalStorage(new Date());
  return (
    <>
      <Navbar />
      <Announcement />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/sign-in" element={<Sign />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>

  )
}

export default App
