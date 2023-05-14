import React, {useState} from 'react'
import NavBar from '../navbar/NavBar'
import { styled } from '@mui/material'
import { useNavigate } from "react-router-dom";

const Form = styled('form')({
  background:  '#fff',
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  borderRadius: '15px',
  gap: '10px',
 
  // justifyContent: 'center',
  // alignItems: 'center'
})

const Root = styled('div')({
  background: '#512DA8',
  height: '100vh',
  display: 'flex',
  gridAria: "main",
  justifyContent: 'center',
  alignItems: 'center',
   'h1': {
  textAlign: 'center'
   }
})

const Footer = styled('footer')({
  background: '#512DA8',
 padding: '1.1rem',
 textAlign: 'center',
 color: 'white',
 gridArea: "footer",
 margin: 0
})
const Button = styled('button')({
  marginBlockStart : '1rem',
  padding: '5px',
  background: "#F3BD30",
  border: 'transparent',
  borderRadius: '50px'
})
const Input = styled('input')({
  paddingInlineStart : '10px',
  paddingBlock: '5px',
  borderRadius: '50px',
  border: '1px solid gray'
})



export default function LoginCard() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    senha: ''
  })



  const handleChange = (e) => {
    setData(prev => {
      const {value , name} = e.target
      return {
        ...prev,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {

    event.preventDefault()
    
    // submitToApi(formData)
    
    navigate("/");
    
    }

  return (
 
    <>
    
    <NavBar/>
   
    <Root>
    <Form onSubmit={handleSubmit} >
    <h1>login</h1>
    <p>Insira seus dados para entrar no 
    sistema</p>
    <Input 
    type = 'text' 
    placeholder='email'
    name = 'email'
    onChange = {handleChange} 
    required 
    />
    <Input 
    type = 'text' 
    placeholder='Senha' 
    name = 'senha'
    onChange = {handleChange} 
    required/>
    <Button type = 'submit'>Entrar</Button>
   </Form>
   </Root>
   <Footer>Todos os direitos reservados | 2023</Footer>
   </>
  )
}
