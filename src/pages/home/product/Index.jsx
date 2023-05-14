import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/navbar/NavBar'
import Card from '../../../components/card/Card'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { styled } from '@mui/material'
import { Cards } from '../Index'

const Root  = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 2,
  marginBlock: '1rem',

  '& .productImage': {
    width: '200px',
    height: '200px'
  },

  '& .productDescription': {
    border: '1px solid black',
    padding: '1rem',
    borderRadius: '10px'
  }
})
const StyledProductList  = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 2,
  marginBlock: '1rem',
})

const Typography = styled('h2')({
  textAlign: 'center'
})

// const url = 'https://dummyjson.com/products/'
export default function Product() {
   const navigate = useNavigate()
    const [product, setProduct ] = useState([])
    const [products, setProducts ] = useState([])

    const {id} = useParams()

    useEffect(() => {
        fetchProduct()
        fetchProducts()
    }, [id])

    async function fetchProduct(){
        const response = await axios(`https://dummyjson.com/products/${id}`)
        
        setProduct(response)
      }
    async function fetchProducts(){
        const response = await axios(`https://dummyjson.com/products`)
        
        setProducts(response.data.products)
      }

    //   const {url, alt, discription, title , price } = products?.data
    let filteredProducts = products.filter(product => product.id != id)


  return (
    <div>
        <NavBar voltar/>

        <Root>
          <img className = 'productImage' src = {product.data?.images[0]} alt = {product.data?.title} />
          <div>
            <h1>{product.data?.title}</h1>
            <p>{product.data?.brand}</p>
            <p>R$ {product.data?.price}</p>
            <p className='productDescription'>{product.data?.description}</p>
          </div>
        </Root>

        <div>
          <Typography> Veja outros produtos </Typography>
   <Cards className='productsList'>
    {
      filteredProducts.map(prod => {
        const { title,id, description, price, images } = prod

        return (
          <Link to = {`/product/${id}`} key = {id}> 
          <Card
          id = {id}
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
        </div>
        </div>
  )
}
