import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import Login from './components/Login'
import Products from './components/Products'
import Register from './components/Register'
import Home from './pages/Home'
import Layout from './pages/Layout'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='products' element={<Products />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  )
}

export default Router