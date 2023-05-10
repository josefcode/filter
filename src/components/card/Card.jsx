import React from 'react'
import { styled } from '@mui/material'


const StyledRoot = styled('div')({
   width: '450px',
   height: '200px',
   borderRadius: '8px',
   border: '1px solid gray',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   gap: '10px',

   '& .image': {
    width: '200px',
    height: '200px',
    borderRadius: '8px'
   },
  //  '& .description': {
  //   marginRight: 'auto'
  //  }
})

export default function Card({url,alt, discription, title , onClick, price}) {
  return (
    <StyledRoot className='cardContainer'>
       
        <img className = "image"  src = {url} alt = {alt} />
      
        <div className='description'>
        <p>
            {discription}
        </p>
        <p>{title}</p>
        <p>{price}</p>
        </div>
    </StyledRoot>
  )
}
