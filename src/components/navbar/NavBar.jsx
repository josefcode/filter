import React from 'react'
import { styled } from '@mui/material'

const StyeldHeader = styled('nav')({
    background: '#512DA8',
    padding: '10px',
    textAlign: 'center',
    color: '#fff',
    gridArea: 'header',

})

export default function NavBar() {
  return (
    <header>
       <StyeldHeader>
        <h1>Shop Products</h1>
       </StyeldHeader>
    </header>
  )
}

