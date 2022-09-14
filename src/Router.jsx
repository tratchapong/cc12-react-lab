import {useState} from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import Login from './components/Login'
import Products from './components/Products'
import Register from './components/Register'
import Home from './pages/Home'
import Layout from './pages/Layout'

function Router() {
  const [searchText, setSearchText] = useState('')
  return (
    <Routes>
      <Route path='/' element={<Layout setSearchText={setSearchText} />} >
        <Route index element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='products' element={<Products searchText={searchText} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  )
}

export default Router