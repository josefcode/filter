import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card/Card'
import axios from 'axios'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Index'
import Product from './pages/home/product/Index'
import Login from './pages/login/Index'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/product/:id' element = {<Product />} />
      <Route path = '/login' element = {<Login />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App
