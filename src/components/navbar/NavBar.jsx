import React from 'react'
import { styled } from '@mui/material'

const StyeldHeader = styled('nav')({
    background: 'red',
    padding: '10px',
    textAlign: 'center'
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

