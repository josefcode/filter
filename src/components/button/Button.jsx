
import { styled } from '@mui/material'

const StyledButton = styled('button')({
    background: '#F3BD30',
    border: 'none',
    borderRadius: '50px',
    padding: '1rem',
    minWidth: '100px',
    marginInlineStart: "0.5rem"
})

export default function Button({children, onClick}) {
  return (
   <StyledButton onClick = {onClick}>{children}</StyledButton>
  )
}
