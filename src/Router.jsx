import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Hero from './components/Hero'
import Login from './components/Login'
import Register from './components/Register'
import Layout from './pages/Layout'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Hero />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  )
}

export default Router