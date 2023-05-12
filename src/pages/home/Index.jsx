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
export const Root = styled('div')({
   'a': {
    textDecoration: 'none',
   },
   'h2': {
    color: '#F3BD30'
   },
   'span': {
    color: 'black'
   },
   '& .price': {
    marginBlockStart: '5px'
   }
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

  return (
    <Root>
    <NavBar />
    <Cards >
    {
      products.map(prod => {
        const { title, id, description, price, images } = prod
       console.log(title)
        return (
          <Link to = {`/product/${id}`} >
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
   </Root>
    )
  {/* return (
    <div>
        <NavBar />
    </div>
  ) */}
}

