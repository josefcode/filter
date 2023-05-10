import React, {useState, useEffect}from 'react'
import NavBar from '../../components/navbar/NavBar'
import axios from 'axios'
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'
import {styled} from '@mui/material'

export const Cards = styled('div')({
  display:'flex',
   flexWrap : 'wrap',
    gap: '20px', 
    paddingBlockStart: '1rem',
     alignItems: 'center',
     padding: '1rem',
     justifyContent: 'center'
})


const url = "https://dummyjson.com/products"

export default function Home() {

const [products, setProducts ] = useState([])

  useEffect(() => {
   fetchProducts()
  }, [])

  async function fetchProducts(){
    const response = await axios(url)
    
    setProducts(response.data.products)
  }

  function handleLink(){
    alert('hello')
  }
  return (
    <>
    <NavBar />
    <Cards >
    {
      products.map(prod => {
        const { title, id, description, price, images } = prod

        return (
          <Link to = {`/product/${id}`}>
          <Card
          url = {images[0]}
          alt = {title}
          title = {title}
          discription= {description}
          price = {price}
          
          />
          </Link>
        )
      })
    }
    </Cards>
   </>
    )
  {/* return (
    <div>
        <NavBar />
    </div>
  ) */}
}

