import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import Button from '../button/Button'


const StyeldHeader = styled('nav')({
    background: '#512DA8',
    padding: '10px',
   
    color: '#fff',
    gridArea: 'header',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    'span': {
      color: '#fff'
    }

})

export default function NavBar({ email, showLoginButtons, voltar}) {

  const navigate = useNavigate()

  function reset(){
    localStorage.removeItem('email')

    window.location.reload(); 
  }
  return (
    <header>
       <StyeldHeader>
        <h1>Shop Products</h1>
     
        <div>
        {
          showLoginButtons ? 
          email ? (
               <>
               <span>{email}</span>
               <Button onClick = {reset}> Login out</Button>
               </>
          ) :
        <Button onClick = {() => navigate('/login')}>{email? 'logiout' : 'login' } </Button> : 
        null
       }
        {
          voltar ? <Button onClick = {() => navigate('/')}>back Home</Button> : null
        }
        </div>
       </StyeldHeader>
    </header>
  )
}

