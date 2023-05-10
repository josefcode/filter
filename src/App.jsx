import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card/Card'
import axios from 'axios'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Index'
import Product from './pages/home/product/Index'

// const url = "https://dummyjson.com/products"

// function App() {

//   const [products, setProducts ] = useState([])

//   useEffect(() => {
//    fetchProducts()
//   }, [])

//   async function fetchProducts(){
//     const response = await axios(url)
    
//     setProducts(response.data.products)
//   }

//   return (
//     <>
//     <NavBar />
//     <div style = {{display:'flex', flexWrap : 'wrap', gap: '20px', paddingBlockStart: '1rem', alignItems: 'center'}}>
//     {
//       products.map(prod => {
//         const { title, id, description, price, images } = prod

//         return (
//           <Card 
//           url = {images[0]}
//           alt = {title}
//           title = {title}
//           discription= {description}
//           price = {price}

//           />
//         )
//       })
//     }
//     </div>
//     </>
//   )
// }

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/product/:id' element = {<Product />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App
