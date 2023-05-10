import React from 'react'
import { styled } from '@mui/material'


const StyledRoot = styled('div')({
   width: '300px',
   height: '100px',
   borderRadius: '8px',
   border: '1px solid gray',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   gap: '10px',


   '& .image': {
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    
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
        <span>
            {discription}
        </span>
        <span>{title}</span>
        <span>{price}</span>
        </div>
    </StyledRoot>
  )
}
