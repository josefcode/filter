import React from 'react'
import { styled } from '@mui/material'


const StyledRoot = styled('div')({
   width: '300px',
   minHeight: '100px',
   borderRadius: '8px',
   border: '1px solid gray',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   gap: '10px',


   '& .image': {
    width: '80px',
    height: '80px',
    borderRadius: '8px',
    marginInline: '10px'
    
   },
   '& .description': {
    fontSize: '12px'
   }
})

export default function Card({url,alt, discription, title , onClick, price}) {
  return (
    <StyledRoot className='cardContainer'>
       
        <img className = "image"  src = {url} alt = {alt} />
      
        <div className='description'>
        <h2>{title}</h2>
        <span>
            {discription}
        </span>
        <div className = "price">
        <span >R$ {price}</span>
        </div>
        </div>
    </StyledRoot>
  )
}
